import {
  Text,
  Box,
  Flex,
  Paper,
  Group,
  ScrollArea,
  Title,
} from "@mantine/core";
import Style from "../web.module.scss";

import WomenImg_1 from "../assets/Women_1.png";
import WomenImg_2 from "../assets/Women_2.png";
import WomenImg_3 from "../assets/Women_3.png";
import WomenImg_4 from "../assets/Women_4.png";

import New_1 from "../assets/new_1.png";
import New_2 from "../assets/new_2.png";
import New_3 from "../assets/new_3.png";
import New_4 from "../assets/new_4.png";
import New_5 from "../assets/new_5.png";
import New_6 from "../assets/new_6.png";

import Top_1 from "../assets/Top_1.png";
import Top_2 from "../assets/Top_2.png";
import Top_3 from "../assets/Top_3.png";
import Top_4 from "../assets/Top_4.png";
import Top_5 from "../assets/Top_5.png";
import Top_6 from "../assets/Top_6.png";

import Men_1 from "../assets/Men_1.png";
import Men_2 from "../assets/Men_2.png";
import Men_3 from "../assets/Men_3.png";
import Men_4 from "../assets/Men_4.png";

function Products() {
  return (
    <Box maw="100%" w="100%" h="150vh">
      <Box>
        <Flex justify="space-between">
          <Box w="49%" h="50vh" bg="#545454">
            <Box>
              <Text fz={40} pl={60} fw={600} c="#FFFFFF">
                WOMEN
              </Text>
              <Flex className={Style.caruselProducts} justify="end">
                <img src={WomenImg_1} alt="" />
                <img src={WomenImg_2} alt="" />
                <img src={WomenImg_3} alt="" />
                <img src={WomenImg_4} alt="" />
              </Flex>
              <Text
                className={Style.cursoreP}
                pt={25}
                pl={60}
                fz={40}
                fw={600}
                c="#FFFFFF"
              >{`SHOP NOW ->`}</Text>
            </Box>
          </Box>
          <Box w="49%" h="50vh" bg="#545454">
            <Box>
              <Text fz={40} pl={60} fw={600} c="#FFFFFF">
                MEN
              </Text>
              <Flex className={Style.caruselProducts} justify="end">
                <img src={Men_1} alt="" />
                <img src={Men_2} alt="" />
                <img src={Men_3} alt="" />
                <img src={Men_4} alt="" />
              </Flex>
              <Text
                className={Style.cursoreP}
                pt={25}
                pl={60}
                fz={40}
                fw={600}
                c="#FFFFFF"
              >{`SHOP NOW ->`}</Text>
            </Box>
          </Box>
        </Flex>
        <Box h="50vh" w="100%">
          <Box>
            <Text pt={10} fz={40} pl={60} fw={600}>
              NEW RELEASES
            </Text>
            <Flex mt={20} justify="center" align="center" gap={100}>
              <Box w={150}>
                <img src={New_1} alt="" />
                <Text pt={10}>
                  dsuared 2 patent new punk derby shoes
                  <span className={Style.cost}> us $675 ksh 67500 sh</span>
                </Text>
              </Box>
              <Box w={150}>
                <img src={New_2} alt="" />
                <Text pt={10}>
                  new season new balance 550 sneakers
                  <span className={Style.cost}> us $310 ksh 31000 sh</span>
                </Text>
              </Box>
              <Box w={150}>
                <img src={New_3} alt="" />
                <Text pt={10}>
                  giuseppe zanotti new york ankle boots
                  <span className={Style.cost}> us $671 ksh 67100 sh</span>
                </Text>
              </Box>
              <Box w={150}>
                <img src={New_4} alt="" />
                <Text pt={10}>
                  tod’s new gommini 122 mocassins.
                  <span className={Style.cost}> us $475 ksh47500 shoes</span>
                </Text>
              </Box>
              <Box className={Style.relesImg} w={150}>
                <img src={New_5} alt="" />
                <Text pt={10}>
                  giuseppe zanotti rudolph new chain loafers
                  <span className={Style.cost}> us $940 ksh 94000 sh</span>
                </Text>
              </Box>
              <Box w={150}>
                <img src={New_6} alt="" />
                <Text pt={10}>
                  palm angles new tennis leopard print sneaker
                  <span className={Style.cost}> us $500 ksh 50000 sh</span>
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box h="50vh" w="100%" bg="#C4C4C4">
          <Box>
            <Text pt={10} fz={40} pl={60} fw={600}>
              TOP KICKS
            </Text>
            <Flex mt={20} justify="center" align="center" gap={100}>
              <Box w={150}>
                <img src={Top_1} alt="" />
                <Text pt={10}>
                  dsuared 2 patent new punk derby shoes
                  <span className={Style.cost}> us $675 ksh 67500 sh</span>
                </Text>
              </Box>
              <Box w={150}>
                <img src={Top_2} alt="" />
                <Text pt={10}>
                  new season new balance 550 sneakers
                  <span className={Style.cost}> us $310 ksh 31000 sh</span>
                </Text>
              </Box>
              <Box w={150}>
                <img src={Top_3} alt="" />
                <Text pt={10}>
                  giuseppe zanotti new york ankle boots
                  <span className={Style.cost}> us $671 ksh 67100 sh </span>
                </Text>
              </Box>
              <Box w={150}>
                <img src={Top_4} alt="" />
                <Text pt={10}>
                  tod’s new gommini 122 mocassins.{" "}
                  <span className={Style.cost}> us $475 ksh47500 shoes</span>
                </Text>
              </Box>
              <Box className={Style.relesImg} w={150}>
                <img src={Top_5} alt="" />
                <Text pt={10}>
                  giuseppe zanotti rudolph new chain loafers{" "}
                  <span className={Style.cost}> us $940 ksh 94000 sh</span>
                </Text>
              </Box>
              <Box w={150}>
                <img src={Top_6} alt="" />
                <Text pt={10}>
                  palm angles new tennis leopard print sneaker
                  <span className={Style.cost}> us $500 ksh 50000 sh</span>
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Products;
