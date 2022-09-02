import React from "react";
import { styled } from "frontity";
import { Flex, Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import {
  Text,
  Image,
  Center,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

const PolitiqueConfidentialite = () => {
  return (
    <>
      <Box
        height={{ base: "100%", md: "50%", xl: "25%" }}
        width={["100%", "50%", "25%", "15%"]}
        as="section"
      />
      <Box fontSize={["sm", "md", "lg", "xl"]} bg={"briefstory.bg"}>
        <Box
          margin="0 auto"
          textAlign={"center"}
          maxWidth={"1140px"}
          color={"gray"}
        >
          <Heading
            color="#404757"
            pt="115px"
            fontSize={{ base: "36px", md: "40px" }}
          >
            Politique de confidentialité
          </Heading>
          <Box
            color="#858A96"
            fontSize={{ base: "14px", md: "18px" }}
            fontFamily="OpenSans"
            lineHeight={"28px"}
            maxW={"776px"}
            margin="0 auto"
            justifyContent={"center"}
          >
            <Box p="28px">
              <Heading
                fontSize={{ base: "14px", md: "18px" }}
                fontFamily="OpenSansBold"
                pb="28px"
                color="#858A96"
              >
                Politique de protection des données personnelles
              </Heading>
              <Text pb="56px">
                Retrouvez notre politique de confidentialité, décrivant la
                finalité des traitements de vos données personnelles.
              </Text>
              <Text>
                La mission de{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#858A96",
                    fontFamily: "OpenSansBold",
                  }}
                >
                  briefstory
                </span>{" "}
                est d’accompagner produire et distribuer des contenus sur son
                média.{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#858A96",
                    fontFamily: "OpenSansBold",
                  }}
                >
                  briefstory
                </span>{" "}
                accompagne aussi les entreprises dans leur gestion et production
                de contenus
              </Text>
              <Text pb="56px">
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#858A96",
                    fontFamily: "OpenSansBold",
                  }}
                >
                  briefstory
                </span>{" "}
                est soucieux de la protection et de la confidentialité des
                données personnelles et s’engage à assurer le meilleur niveau de
                protection à vos données personnelles en conformité avec les
                règlementations en vigueur sur la protection des données
                personnelles, applicables en Europe (RGPD) et en France.
              </Text>
              <Text>
                Cette politique de confidentialité a pour objectif de vous
                informer sur les mesures et engagements pratiques pris par{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#858A96",
                    fontFamily: "OpenSansBold",
                  }}
                >
                  briefstory
                </span>{" "}
                afin de veiller au respect et à la protection de vos données
                personnelles lors de l’utilisation de nos services.
              </Text>
              <Text>
                Elle concerne tous les visiteurs de nos Sites et les
                utilisateurs de nos Services («Utilisateurs »). Les termes «
                nous » et « notre » se rapportent à{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#858A96",
                    fontFamily: "OpenSansBold",
                  }}
                >
                  briefstory
                </span>{" "}
                et aux Services que nous fournissons. Les termes « Vous » et «
                vos.votre» se rapportent à tous les Utilisateurs de nos Services
                ou visiteurs de nos Sites ou Applications. Le terme « Client »
                définit nos clients professionnels. Pour toute autre précision
                sur les définitions des termes en majuscules, vous pouvez vous
                reporter à nos CGU en vigueur.
              </Text>
            </Box>

            <Box p="28px">
              <Heading
                fontSize={{ base: "14px", md: "18px" }}
                fontFamily="OpenSansBold"
                pb="28px"
                color="#858A96"
              >
                1 - Identité du responsable du traitement des données
              </Heading>
              <Text>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#858A96",
                    fontFamily: "OpenSansBold",
                  }}
                >
                  briefstory
                </span>{" "}
                collecte et traite les données personnelles de ses Utilisateurs
                via ses Sites et Applications afin de vous fournir ainsi qu’à
                nos Clients, nos Services.{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#858A96",
                    fontFamily: "OpenSansBold",
                  }}
                >
                  briefstory
                </span>{" "}
                est responsable de traitement au sens du Règlement Général sur
                les données personnelles.
              </Text>
              <Text>
                Notre Délégué à la Protection des Données (DPO) est Mathieu
                Bertolo.
              </Text>
              <Text pb="28px">
                Il peut être contacté par mail à l’adresse mathieu@
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#858A96",
                    fontFamily: "OpenSansBold",
                  }}
                >
                  briefstory
                </span>{" "}
                5 rue des chantiers 75005 Paris.
              </Text>
            </Box>

            <Box p="28px">
              <Heading
                fontSize={{ base: "14px", md: "18px" }}
                fontFamily="OpenSansBold"
                pb="28px"
                color="#858A96"
              >
                2 – Finalité des traitements et base juridique
              </Heading>
              <Text>
                Les traitements mis en œuvre par{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#858A96",
                    fontFamily: "OpenSansBold",
                  }}
                >
                  briefstory
                </span>{" "}
                répondent à des finalités explicites, légitimes et déterminées.
              </Text>

              <Heading
                fontSize={{ base: "14px", md: "18px" }}
                fontFamily="OpenSansBold"
                p="28px"
                color="#858A96"
              >
                Accès aux contenus de notre site
              </Heading>
              <Text>
                Nos Services vous donnent accès aux contenus que nous produisons
                sur ce site.
              </Text>
              <Text>
                En fonction des Services et des contenus que vous consultez,
                nous utilisons vos données à travers deux outils Google
                Analytics et Google Ad Manager pour gérer notre offre de
                contenus sponsorisés.
              </Text>

              <Heading
                fontSize={{ base: "14px", md: "18px" }}
                fontFamily="OpenSansBold"
                p="28px"
                color="#858A96"
              >
                Création de nouveaux services
              </Heading>
              <Text>
                Si nous réalisons des traitements ultérieurs de vos données pour
                d’autres finalités que celles décrites dans notre politique de
                confidentialité, nous vous en informerons. Ces nouvelles
                finalités seront compatibles avec les finalités décrites ici et
                à défaut, nous solliciterons votre consentement.
              </Text>
              <Text>
                Aucune donnée personnelle vous concernant n’est transmise à nos
                Clients sans votre accord.
              </Text>
            </Box>

            <Box p="28px">
              <Heading
                fontSize={{ base: "14px", md: "18px" }}
                fontFamily="OpenSansBold"
                pb="28px"
                color="#858A96"
              >
                3 – Données collectées
              </Heading>
              <Text>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#858A96",
                    fontFamily: "OpenSansBold",
                  }}
                >
                  briefstory
                </span>{" "}
                veille à ne traiter que des données personnelles qui sont
                strictement nécessaires à l’égard des finalités détaillées plus
                haut.
              </Text>
            </Box>

            <Box p="28px">
              <Heading
                fontSize={{ base: "14px", md: "18px" }}
                fontFamily="OpenSansBold"
                pb="28px"
                color="#858A96"
              >
                4 – Destinataires des données collectées
              </Heading>
              <Text>
                Vos données à caractère personnel ne sont utilisées que par des
                personnes identifiées et habilitées compte tenu des finalités
                décrites dans la présente politique de protection des données
                personnelles.
              </Text>
              <Text>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#858A96",
                    fontFamily: "OpenSansBold",
                  }}
                >
                  briefstory
                </span>{" "}
                s’engage à ne jamais transmettre vos données personnelles à des
                tiers pour des raisons étrangères à ces finalités.
              </Text>
              <Text>
                Ainsi, vos données ne sont transmises qu’aux catégories de
                personnes listées ci-dessous :
              </Text>
              <Text>
                – Les services autorisés de{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#858A96",
                    fontFamily: "OpenSansBold",
                  }}
                >
                  briefstory
                </span>{" "}
                (équipe de réalisation techniques, équipe de suivi de la
                relation client)
              </Text>
              <Text>
                – Nos prestataires techniques : hébergement, service
                d’extraction des données non formatées, service d’envoi de mail,
                prestataire d’audit et de sécurité informatique
              </Text>
              <Text>
                Nous attirons votre attention sur l’utilisation des boutons des
                réseaux sociaux de type « Se connecter via … ». L’utilisation de
                ces boutons simplifie dans certains cas la saisie de vos données
                pour renseigner un formulaire. Il s’agit d’une facilité
                proposée.
              </Text>
              <Text>
                L’utilisation de ces boutons est susceptible d’entraîner une
                collecte de données personnelles par les réseaux sociaux
                concernés avant même que{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#858A96",
                    fontFamily: "OpenSansBold",
                  }}
                >
                  briefstory
                </span>{" "}
                n’ait collecté vos données personnelles.
              </Text>
              <Text>
                Nous vous invitons à être vigilants et consulter les politiques
                de protection des données personnelles de ces réseaux sociaux
                afin de prendre précisément connaissance des informations qui
                sont collectées par ses sites et applications ainsi que les
                finalités d’utilisation de vos données, notamment à des fins
                publicitaires.
              </Text>
              <Text>
                Vous pouvez parfois paramétrer directement sur les réseaux
                sociaux utilisés l’accès et la confidentialité de vos données.
              </Text>
              <Text>
                L’utilisation de ces boutons « réseaux sociaux » se fait à votre
                initiative et sous votre entière responsabilité.{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#858A96",
                    fontFamily: "OpenSansBold",
                  }}
                >
                  briefstory
                </span>{" "}
                n’est pas responsable du traitement de vos données qui sera fait
                par ces réseaux sociaux tiers.
              </Text>
            </Box>

            <Box p="28px">
              <Heading
                fontSize={{ base: "14px", md: "18px" }}
                fontFamily="OpenSansBold"
                pb="28px"
                color="#858A96"
              >
                5 – Communication
              </Heading>
              <Text>
                Selon les Services utilisés ou vos préférences, nous vous
                contacterons par mail, par publications sur nos Sites ou
                Applications, par SMS, messagerie instantanée, notifications
                push ou par tout autres moyen de communications que vous nous
                aurez transmis.
              </Text>
            </Box>

            <Box p="28px">
              <Heading
                fontSize={{ base: "14px", md: "18px" }}
                fontFamily="OpenSansBold"
                pb="28px"
                color="#858A96"
              >
                6 – Sécurité des Données collectées
              </Heading>
              <Text>
                Toutes les données collectées sont traitées de façon à garantir
                une sécurité appropriée, ce qui se traduit par une politique de
                sécurité logique et matérielle et des mesures de sécurité
                spécialement adaptés à nos activités. Différents audits sont
                menés au sein de nos infrastructures.
              </Text>
              <Text>
                Les équipes techniques{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#858A96",
                    fontFamily: "OpenSansBold",
                  }}
                >
                  briefstory
                </span>{" "}
                sont sensibilisées au RGPD et la prise en compte de la
                protection des données personnelles est omni présente au moment
                de la conception et l’exploitation des applications.
              </Text>
            </Box>

            <Box p="28px">
              <Heading
                fontSize={{ base: "14px", md: "18px" }}
                fontFamily="OpenSansBold"
                pb="28px"
                color="#858A96"
              >
                7 – Conservation des données
              </Heading>
              <Text>
                Vos données sont conservées au maximum pendant une durée de 3
                ans à partir de la dernière date d’interaction avec nos
                services.
              </Text>
              <Text>
                Les données sont ensuite anonymisées et peuvent être utilisées à
                des fins statistiques.
              </Text>
            </Box>

            <Box p="28px">
              <Heading
                fontSize={{ base: "14px", md: "18px" }}
                fontFamily="OpenSansBold"
                pb="28px"
                color="#858A96"
              >
                8 – Vos droits
              </Heading>
              <Text>
                En application de la règlementation, vous disposez d’un droit
                d’accès, de rectification, de suppression, d’opposition et d’un
                droit à la portabilité relativement à l’ensemble des données
                vous concernant.
              </Text>
              <Text>
                Vous disposez également d’un droit à la limitation des
                traitements utilisant vos données personnelles. Toute personne a
                également le droit de ne pas faire l’objet d’une prise de
                décision individuelle exclusivement fondée sur un traitement
                automatisé tel que le profilage. Si vous avez consenti au
                traitement de données personnelles, vous pouvez retirer votre
                consentement à tout moment.
              </Text>
              <Text>
                Ces droits s’exercent auprès du Délégué à la Protection des
                Données par courrier postal ou électronique accompagné d’une
                copie de titre d’identité aux adresses suivantes
              </Text>
              <Text>
                – par mail :{" "}
                <span style={{ as: "a", color: "#000000BF" }}>
                  mathieu@briefstory.com
                </span>
              </Text>
              <Text>
                – par courrier : Délégué à Protection des Données 5 rue des
                chantiers 75005 Paris
              </Text>
              <Text>
                Vous disposez également du droit de définir des directives
                relatives au sort de vos données personnelles en cas de décès.
              </Text>
              <Text>
                Vous avez le droit d’effectuer un recours auprès de la
                Commission nationale de l’informatique et des libertés (CNIL).
              </Text>
            </Box>

            <Box p="28px">
              <Heading
                fontSize={{ base: "14px", md: "18px" }}
                fontFamily="OpenSansBold"
                pb="28px"
                color="#858A96"
              >
                9 – Contact
              </Heading>
              <Text>
                Pour toutes demandes d’information concernant la politique de
                protection des données à caractère personnel mise en œuvre par{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#858A96",
                    fontFamily: "OpenSansBold",
                  }}
                >
                  briefstory
                </span>
                , vous pouvez vous adressez au Délégué à Protection des Données
                5 rue des chantiers 75005 Paris. Dans un souci de clarté, nous
                précisons la façon dont notre site{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#858A96",
                    fontFamily: "OpenSansBold",
                  }}
                >
                  briefstory
                </span>{" "}
                utilisent des cookies.
              </Text>
              <Text>
                Nous n’utilisons aucun cookie de tiers qui serait étranger aux
                finalités poursuivies par notre site. Notre métier est de vous
                accompagner dans votre évolution professionnelle et nous
                n’utilisons en aucun cas vos visites pour assurer la promotion
                de tiers extérieurs à ces finalités. Notre Site est uniquement
                un lieu de mise en relation entre des communautés bien
                déterminées dans le domaine de l’évolution professionnelle.
              </Text>
              <Text>
                Lors de vos consultations des cookies sont déposés sur votre
                ordinateur, votre tablette ou votre smartphone. Les informations
                ci-dessous vous permettent de mieux comprendre comment
                fonctionnent les cookies et comment utiliser les outils actuels
                afin de les paramétrer.
              </Text>
            </Box>

            <Box p="28px">
              <Heading
                fontSize={{ base: "14px", md: "18px" }}
                fontFamily="OpenSansBold"
                pb="28px"
                color="#858A96"
              >
                Qu’est-ce qu’un cookie ?
              </Heading>
              <Text>
                L’utilisation des cookies est courante sur Internet. Un cookie
                est un petit fichier texte contenant des informations, qui est
                enregistré sur votre équipement (ex : ordinateur, tablette ou
                téléphone mobile) et qui vous permet de bénéficier d’une
                meilleure expérience utilisateur. Nous employons deux types de
                cookies : les cookies persistants et les cookies de session. Un
                cookie persistant nous permet de vous identifier en tant
                qu’utilisateur existant pour que vous puissiez revenir ou
                consulter nos Services sans avoir à saisir de nouveau votre
                identifiant. Une fois connecté, un cookie persistant demeure
                dans votre navigateur et sera lu par{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#858A96",
                    fontFamily: "OpenSansBold",
                  }}
                >
                  briefstory
                </span>{" "}
                lorsque vous retournerez sur l’un de nos Sites. Les cookies de
                session n’existent que pendant la durée de la session
                (habituellement le temps de la visite d’un site web ou de la
                session de navigateur).
              </Text>
              <Text>
                Nous pouvons utiliser des cookies pour afficher des offres
                ciblées sur notre site. Un cookie peut aussi nous servir à
                savoir si après avoir vu un contenu sur{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#858A96",
                    fontFamily: "OpenSansBold",
                  }}
                >
                  briefstory
                </span>{" "}
                (par exemple une annonce), un Utilisateur a par la suite visité
                le site de notre Client (et par exemple renseigné un
                formulaire). Ce cookie a pour but de mesurer notre audience et
                notre capacité à transformer votre visite en mise en relation
                avec nos Clients soit en visitant nos Sites et applications,
                soit en les ayant visités.De manière similaire, nos partenaires
                sont susceptibles d’utiliser un cookie pour déterminer si nous
                avons affiché une annonce, connaître son rendement, ou nous
                donner plus de détails sur votre interaction avec le contenu
                (par exemple l’annonce) sur lequel a été déposé le Cookie.
              </Text>
            </Box>

            <Box>
              <TableContainer
                maxWidth="720px"
                overflow="auto"
                justifyContent="center"
                alignContent="center"
                m="0 auto"
              >
                <Table justifyContent="center" alignContent="center" m="0 auto">
                  <TableCaption placement="top">
                    Cookies utilisés par Google Analytics
                  </TableCaption>
                  <Thead>
                    <Tr>
                      <Th scope="col" height="100px">
                        Nom du Cookie (Domaine)
                      </Th>
                      <Th scope="col">Fonction</Th>
                      <Th scope="col">Durée de vie</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>__utma</Td>
                      <Td>
                        Ce cookie est utilisé pour distinguer les visiteurs
                        uniques sur votre site. Ce dernier est mis à jour à
                        chaque page vue.
                      </Td>
                      <Td>2 ans</Td>
                    </Tr>
                    <Tr>
                      <Td>__utmb</Td>
                      <Td>
                        Ce cookie est utilisé pour suivre la session de visite
                        de l’internaute. Ce cookie expire dès que l’internaute
                        reste inactif sur votre site plus de 30 minutes.
                        L’utilisation de ce cookie couplée avec le cookie utmc
                        permet de suivre de suivre les visites (sessions) sur un
                        site donnée.Notez que la durée de vie de cookie peut
                        être adaptée à vos besoins et spécificités. Pour cela,
                        il vous suffit d’appeler la fonction
                        _setSessionCookieTimeout().
                      </Td>
                      <Td>30 minutes</Td>
                    </Tr>
                    <Tr>
                      <Td>__utmc</Td>
                      <Td>
                        Ce cookie fonctionne en complément du cookie __utmb pour
                        déterminer si oui ou il y a une nouvelle visite par le
                        visiteur unique actuel.
                      </Td>
                      <Td>Non défini. Il expire en fin de session.</Td>
                    </Tr>
                    <Tr>
                      <Td>__utmz</Td>
                      <Td>
                        Ce cookie stocke toutes les informations utiles à
                        l’identification d’une source de trafic. C’est dans ce
                        cookie que sont stockées les informations suivantes : la
                        source de trafic, le support de cette source de trafic,
                        le mot clé tapé si l’internaute consulte le site en
                        provenance d’un moteur de recherche, etc. Par défaut, ce
                        cookie a une durée de vie de 6 mois, cependant, il vous
                        est possible de modifier cette limite grâce à la
                        fonction : _setCookieTimeout()
                      </Td>
                      <Td>6 mois</Td>
                    </Tr>
                    <Tr>
                      <Td>__utmv</Td>
                      <Td>
                        Ce cookie n’est normalement pas présent dans une
                        configuration par défaut du code de suivi. Le cookie
                        __utmv fait référence aux informations renseignées lors
                        de l’appel à la fonction _setVar(). Notez que le cookie
                        utmv est un cookie optionnel. Ce dernier n’est utilisé
                        que par la fonction setVar.
                      </Td>
                      <Td>2 ans</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>

            <Box p="28px">
              <Heading
                fontSize={{ base: "14px", md: "18px" }}
                fontFamily="OpenSansBold"
                pb="28px"
                color="#858A96"
              >
                Comment gérer les cookies ?
              </Heading>
              <Text>
                Plusieurs possibilités vous sont offertes pour gérer les
                cookies. Tout paramétrage que vous pouvez entreprendre sera
                susceptible de modifier votre navigation sur Internet et vos
                conditions d’accès à certains services nécessitant l’utilisation
                de Cookies. Vous pouvez faire le choix à tout moment d’exprimer
                et de modifier vos souhaits en matière de cookies, par les
                moyens décrits ci-dessous.
              </Text>
              <Text>– Paramétrage de votre navigateur</Text>
              <Text>
                Pour Chrome :{" "}
                <span style={{ as: "a", color: "#000000BF" }}>
                  <a href="https://support.google.com/chrome/answer/95647?hl=fr&hlrm=en">
                    https://support.google.com/chrome/answer/95647?hl=fr&hlrm=en
                  </a>
                </span>
              </Text>
              <Text>
                Pour Internet Explorer :{" "}
                <span style={{ as: "a", color: "#000000BF" }}>
                  <a href="https://windows.microsoft.com/fr-FR/windows-vista/Block-or-allow-Cookies">
                    https://windows.microsoft.com/fr-FR/windows-vista/Block-or-allow-Cookies
                  </a>
                </span>
              </Text>
              <Text>
                Pour FireFox :{" "}
                <span style={{ as: "a", color: "#000000BF" }}>
                  <a href="https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent?redirectlocale=fr&redirectslug=G%C3%A9rer+les+cookies">
                    https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent?redirectlocale=fr&redirectslug=G%C3%A9rer+les+cookies
                  </a>
                </span>
              </Text>
              <Text>
                Pour Opéra :{" "}
                <span style={{ as: "a", color: "#000000BF" }}>
                  <a href="http://help.opera.com/Windows/10.20/fr/cookies.html">
                    http://help.opera.com/Windows/10.20/fr/cookies.html
                  </a>
                </span>
              </Text>
              <Text>
                – Les liens Opt-out pour les cookies de mesure d’audience
                (statistiques)
              </Text>
              <Text>
                Pour les cookies déposés par Google Analytics :{" "}
                <span style={{ as: "a", color: "#000000BF" }}>
                  <a href="https://support.google.com/analytics/answer/181881">
                    https://support.google.com/analytics/answer/181881
                  </a>
                </span>
              </Text>
              <Text>– Les liens Opt-out pour les cookies de partage</Text>
              <Text>
                Pour les cookies déposés par Facebook :{" "}
                <span style={{ as: "a", color: "#000000BF" }}>
                  <a href="https://fr-fr.facebook.com/help/cookies">
                    https://fr-fr.facebook.com/help/cookies
                  </a>
                </span>
              </Text>
              <Text>
                Pour les cookies déposés par Twitter :{" "}
                <span style={{ as: "a", color: "#000000BF" }}>
                  <a href="https://support.twitter.com/articles/20170518-utilisation-des-cookies-et-des-technologies-similaires-par-twitter">
                    https://support.twitter.com/articles/20170518-utilisation-des-cookies-et-des-technologies-similaires-par-twitter
                  </a>
                </span>
              </Text>
              <Text>
                Pour plus d’information sur les cookies, vous pouvez vous rendre
                sur le site de la CNIL, à cette adresse :{" "}
                <span style={{ as: "a", color: "#000000BF" }}>
                  <a href="https://www.cnil.fr/vos-droits/vos-traces/les-cookies/">
                    https://www.cnil.fr/vos-droits/vos-traces/les-cookies/
                  </a>
                </span>
              </Text>
            </Box>

            <Box p="28px">
              <Heading
                fontSize={{ base: "14px", md: "18px" }}
                fontFamily="OpenSansBold"
                pb="28px"
                color="#858A96"
              >
                11 – Mise à jour de la politique de protection des données
              </Heading>
              <Text>
                Notre politique de confidentialité est susceptible d’être
                modifiée ou aménagée à tout moment. En cas de modification, la
                nouvelle politique de confidentialité sera notifiée au moment de
                la connexion à l’application.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PolitiqueConfidentialite;
