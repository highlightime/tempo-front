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

const Appointment = () => {
  const initPosition = {
    lat: 37.566826,
    lng: 126.9786567,
  };

  // TODO
  const [receiver, sender] = ["receiver", "sender"];

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
    data.address = address;
    data.sender = sender;
    data.receiver = receiver;

    console.log(data);
  };

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
