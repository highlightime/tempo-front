import { Map, MapMarker } from "react-kakao-maps-sdk";
import {
  Box,
  Flex,
  FormControl,
  InputGroup,
  InputLeftAddon,
  Input,
  Button,
} from "@chakra-ui/react";
import useGeolocation from "../lib/useGeolocation";
import { useEffect, useState } from "react";
import { Coordinates } from "../types/Geolocation";
import { AppointmentProps } from "../types/Appointment";
import { useForm } from "react-hook-form";
import { AppointmentContractAddr } from "../contracts/ContractAddress";
import contract from "../contracts/AppointmentContract.json";
import { ethers } from "ethers";

const CONTRACT_ADDRESS = AppointmentContractAddr();
const CONTRACT_ABI = contract.abi;

const Appointment = () => {
  const initPosition = {
    lat: 37.566826,
    lng: 126.9786567,
  };

  // TODO
  const [receiver, sender] = ["0x7eB20590eF39cea2041B7570233607f15da82a3b", "sender"];

  const { loaded, coordinates, error } = useGeolocation();
  const [centerPosition, setCenterPosition] =
    useState<Coordinates>(initPosition);
  const [markerPosition, setMarkerPosition] =
    useState<Coordinates>(initPosition);
  const [address, setAddress] = useState("");

  const { register, handleSubmit } = useForm<AppointmentProps>();

  useEffect(() => {
    (() => {
      if (!loaded || error) return;
      setCenterPosition(coordinates!);
      setMarkerPosition(coordinates!);
      searchAddress(coordinates!);
    })();
  }, [loaded]);

  const searchAddress = ({ lat, lng }: Coordinates) => {
    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.coord2Address(lng, lat, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const {
          address: { address_name },
        } = result[0];

        console.log(address_name);
        setAddress(address_name);
      }
    });
  };

  const onSubmit = (data: AppointmentProps) => {
    data.location = address;
    data.sender = sender;
    data.receiver = receiver;

    console.log(data);

    checkWalletIsConnected(address, receiver, data.time);
  };

  const checkWalletIsConnected = async (location, receiver, atime) => {
    const { ethereum } = window;

    if (!ethereum || !ethereum.request) {
      alert("Please install MetaMask!");
    }

    // @ts-ignore
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    if (accounts.length !== 0) {
      // wallet connect
      const account = accounts[0];
      
      // createAppointment
      createAppointment(location, receiver, atime);
    } else {
      console.log("No Authrized Account.");
    }
  };

  async function createAppointment(location, receiver,atime) {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        //console.log(CONTRACT_ADDRESS,currentAccount);

        const appointmentContract = new ethers.Contract(
            CONTRACT_ADDRESS,
            CONTRACT_ABI,
            signer
        );

        let createAppointmentTxn = await appointmentContract.createAppointment(
          receiver,
          location,
          atime,
          atime
        );
        // wait transaction mined
        await createAppointmentTxn.wait();
      
      } else {
        console.log("Ether obj not exists");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Box w="100%">
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          h="90vh"
        >
          <Map
            center={centerPosition}
            style={{ width: "50%", height: "500px", borderRadius: "5px" }}
            onClick={(_t, mouseEvent) => {
              const lat = mouseEvent.latLng.getLat();
              const lng = mouseEvent.latLng.getLng();

              setMarkerPosition({
                lat,
                lng,
              });
              searchAddress({ lat, lng });
            }}
          >
            <MapMarker position={markerPosition} />
          </Map>
          <Box mt="2" fontSize="xl">
            {address || "서울 중구 태평로1가 31"}
          </Box>

          <FormControl w="50%" mt="5">
            <InputGroup>
              <InputLeftAddon children="약속 일자" />
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
                {...register("time")}
              />
            </InputGroup>
          </FormControl>
          <Button type="submit" mt="3">
            약속 잡기
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default Appointment;
