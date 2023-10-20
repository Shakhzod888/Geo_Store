import { Text, Box, Flex } from "@mantine/core";
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
import { useState } from "react";
import { ScrollArea } from "@mantine/core";
import Fade from "react-reveal/Fade";
function Products() {
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });
  return (
    <Box maw="100%" w="100%" h="auto">
      <Box>
        <Flex justify="space-between">
          <Box w="49%" h="60vh" bg="#545454">
            <Box pt={30}>
              <Fade top>
                <Text fz={50} pl={60} fw={700} c="#FFFFFF">
                  WOMEN
                </Text>
              </Fade>
              <Flex className={Style.caruselProducts} justify="end">
                <img src={WomenImg_1} alt="" />
                <img src={WomenImg_2} alt="" />
                <img src={WomenImg_3} alt="" />
                <img src={WomenImg_4} alt="" />
              </Flex>
              <Fade bottom>
                <Text
                  className={Style.cursoreP}
                  pt={25}
                  pl={60}
                  fz={50}
                  fw={700}
                  c="#FFFFFF"
                  ff={"Noto Sans"}
                >{`SHOP NOW ->`}</Text>
              </Fade>
            </Box>
          </Box>
          <Box w="49%" h="60vh" bg="#545454">
            <Box pt={30}>
              <Fade top>
                <Text fz={50} pl={60} fw={700} c="#FFFFFF">
                  MEN
                </Text>
              </Fade>
              <Flex className={Style.caruselProducts} justify="end">
                <img src={Men_1} alt="" />
                <img src={Men_2} alt="" />
                <img src={Men_3} alt="" />
                <img src={Men_4} alt="" />
              </Flex>
              <Fade bottom>
                <Text
                  className={Style.cursoreP}
                  pt={25}
                  pl={60}
                  fz={50}
                  fw={700}
                  c="#FFFFFF"
                  ff={"Noto Sans"}
                >{`SHOP NOW ->`}</Text>
              </Fade>
            </Box>
          </Box>
        </Flex>
        <Box h="auto" w="100%">
          <Box mt={20} mb={20}>
            <Text pt={10} fz={50} ff={"Noto Sans"} pl={60} fw={700}>
              NEW RELEASES
            </Text>
            <Flex mt={20} justify="center" align="center" gap={100}>
              <ScrollArea
                onScrollPositionChange={onScrollPositionChange}
                w={1380}
                h={"auto"}
              >
                <Flex justify="space-between" gap={95}>
                  <div className={Style.releasesBox}>
                    <img src={New_1} alt="" />
                    <p className={Style.name}>
                      Dsuared 2 Patent New Punk Derby Shoes
                    </p>
                    <p className={Style.cost}>Us $675</p>
                    <p className={Style.cost2}>Ksh 67500 Sh</p>
                  </div>
                  <div className={Style.releasesBox}>
                    <img src={New_2} alt="" />
                    <p className={Style.name}>
                      New Season New Balance 550 Sneakers
                    </p>
                    <p className={Style.cost}>Us $310</p>
                    <p className={Style.cost2}>Ksh 31000 Sh</p>
                  </div>
                  <div className={Style.releasesBox}>
                    <img src={New_3} alt="" />
                    <p className={Style.name}>
                      Giuseppe Zanotti New York Ankle Boots
                    </p>
                    <p className={Style.cost}>Us $671</p>
                    <p className={Style.cost2}>Ksh 67100 Sh</p>
                  </div>
                  <div className={Style.releasesBox}>
                    <img src={New_4} alt="" />
                    <p className={Style.name}>
                      Tod’s New Gommini 122 Mocassins White.
                    </p>
                    <p className={Style.cost}>Us $475</p>
                    <p className={Style.cost2}>Ksh 47500 Sh</p>
                  </div>
                  <div className={Style.releasesBox}>
                    <img src={New_5} alt="" />
                    <p className={Style.name}>
                      Giuseppe Zanotti Rudolph New Chain Loafers
                    </p>
                    <p className={Style.cost}>Us $940</p>
                    <p className={Style.cost2}>Ksh 94000 Sh</p>
                  </div>
                  <div className={Style.releasesBox}>
                    <img src={New_6} alt="" />
                    <p className={Style.name}>
                      palm angles new tennis leopard print sneaker
                    </p>
                    <p className={Style.cost}>Us $500</p>
                    <p className={Style.cost2}>Ksh 50000 Sh</p>
                  </div>
                </Flex>
              </ScrollArea>
            </Flex>
          </Box>
        </Box>
        <Box h="auto" w="100%">
          <Box mt={20} pb={20} bg={"#C4C4C4"}>
            <Text pt={30} fz={50} ff={"Noto Sans"} pl={60} fw={700}>
              TOP KICKS
            </Text>
            <Flex mt={20} justify="center" align="center" gap={100}>
              <ScrollArea
                onScrollPositionChange={onScrollPositionChange}
                w={1380}
                h={"auto"}
              >
                <Flex justify="space-between" gap={95}>
                  <div className={Style.releasesBox}>
                    <img src={Top_1} alt="" />
                    <p className={Style.name}>
                      Bally Tonal Stripe Low-Top Sneaker Black
                    </p>
                    <p className={Style.cost}>Us $213</p>
                    <p className={Style.cost2}>Ksh 21300 Sh</p>
                  </div>
                  <div className={Style.releasesBox}>
                    <img src={Top_2} alt="" />
                    <p className={Style.name}>
                      Boss Low-Top Leather Sneakers Mix
                    </p>
                    <p className={Style.cost}>Us $314</p>
                    <p className={Style.cost2}>Ksh 31400 Sh</p>
                  </div>
                  <div className={Style.releasesBox}>
                    <img src={Top_3} alt="" />
                    <p className={Style.name}>
                      Adidas Black X Nice Kicks Ultra Boost Sneaker
                    </p>
                    <p className={Style.cost}>Us $671</p>
                    <p className={Style.cost2}>Ksh 67100 Sh</p>
                  </div>
                  <div className={Style.releasesBox}>
                    <img src={Top_4} alt="" />
                    <p className={Style.name}>
                      Giuseppe Zanotti Kriss High-Top Sneakers
                    </p>
                    <p className={Style.cost}>Us $290</p>
                    <p className={Style.cost2}>Ksh 29000 Sh</p>
                  </div>
                  <div className={Style.releasesBox}>
                    <img src={Top_5} alt="" />
                    <p className={Style.name}>
                      Giuseppe Zanotti Kriss Logo Low-Top Sneakers
                    </p>
                    <p className={Style.cost}>Us $670</p>
                    <p className={Style.cost2}>Ksh 67000 Sh</p>
                  </div>
                  <div className={Style.releasesBox}>
                    <img src={Top_6} alt="" />
                    <p className={Style.name}>
                      Philipp Plein Phantom Kick & High-Top Sneakers
                    </p>
                    <p className={Style.cost}>Us $1200</p>
                    <p className={Style.cost2}>Ksh 120000 Sh</p>
                  </div>
                </Flex>
              </ScrollArea>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Products;
