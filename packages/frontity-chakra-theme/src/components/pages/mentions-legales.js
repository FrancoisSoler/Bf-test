import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import logo from "../../assets/logo-MC.png";
import { Text, Image } from "@chakra-ui/react";

const MentionsLegales = () => {
  return (
    <>
      <Box
        height={{ base: "100%", md: "50%", xl: "25%" }}
        width={["100%", "50%", "25%", "15%"]}
        as="section"
      />
      <Box bg={"briefstory.bg"}>
        <Box
          margin="0 auto"
          textAlign={"center"}
          maxWidth={"740px"}
          color={"gray"}
        >
          <Heading
            color="#404757"
            p="20px"
            pt="120px"
            fontSize={{ base: "36px", md: "40px" }}
          >
            Mentions légales
          </Heading>
          <Box
            color="#858196"
            fontSize={["14px", "14x", "18px"]}
            fontFamily="OpenSans"
            fontWeight="400"
          >
            <Heading
              fontFamily="OpenSansBold"
              fontSize={["14px", "14x", "18px"]}
            >
              Éditeur : Société EZO MEDIA
            </Heading>
            <Text pt={"10px"} justifyContent={"center"} fontStyle="italic">
              Société par actions simplifiée
            </Text>
            <Text pt={"10px"} justifyContent={"center"}>
              au capital de 7 500 € – 885 089 755 R.C.S. Paris
            </Text>
            <Text pt={"10px"}>5 rue des chantiers 75005 Paris</Text>
            <Text p={"10px"}>Tél. 01 73 20 13 37</Text>

            <Text p={"20px"} color="#FBAC62" fontWeight="bold">
              contact@briefstory.io
            </Text>

            <Text fontWeight="bold">Directeur de la publication : </Text>

            <Text p={"10px"}> Mathieu Bertolo</Text>

            <Text p={"10px"} fontWeight="bold">
              Soutien :{" "}
            </Text>

            <Text>briefstory est soutenu par le Ministère de la Culture. </Text>

            <Box p={"40px"} width={"60%"} maxW="360px" margin={"0 auto"}>
              <Image src={logo} />
            </Box>
            <Text fontWeight="bold">Hébergeur : </Text>

            <Text p={"10px"} display="block" lineHeight="28px">
              WPMU DEV operated by Incsub, LLC. PO Box 548 #88100 Birmingham, AL
              35201 USA
            </Text>

            <Text pt={"20px"} fontWeight="bold">
              Propriété intellectuelle
            </Text>
            <Text p={"10px"} display="block" lineHeight="28px">
              En vous connectant à briefstory, site édité et mis en ligne par la
              Société EZO MEDIA, vous accédez à un contenu protégé par la loi,
              notamment par les dispositions du Code de la propriété
              intellectuelle.
            </Text>

            <Text pt={"20px"} fontWeight="bold">
              Gestion des cookies
            </Text>
            <Text p={"10px"} display="block" lineHeight="28px">
              Les cookies stockent temporairement de l’information sur votre
              ordinateur ou votre téléphone. Notre site utilise des cookies liés
              à Google Analytics pour nous permettre de mesurer l’audience du
              site et ne collectent pas de données personnelles.
            </Text>
            <Box height="300px"></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MentionsLegales;
