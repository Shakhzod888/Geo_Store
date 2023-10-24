import { Text, Box, Flex } from "@mantine/core";
import Style from "../web.module.scss";

import { useState } from "react";
import { ScrollArea } from "@mantine/core";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
function Products() {
  useEffect(() => {
    AOS.init();
  });
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });
  return (
    <Box maw="100%" w="100%" h="auto">
      <Box>
        <Flex justify="space-between">
          <Box w="49%" h="60vh" bg="#545454">
            <Box pt={30}>
              <Text
                data-aos="fade-down"
                data-aos-duration="800"
                fz={50}
                pl={46}
                fw={700}
                c="#FFFFFF"
              >
                WOMEN
              </Text>
              <Flex className={Style.caruselProducts} justify="end" gap={3}>
                <img
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  src={
                    "https://media2.newlookassets.com/i/newlook/877293138.jpg?strip=true&qlt=50&fmt=webp&w=526"
                  }
                  alt=""
                />
                <img
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  src={
                    "https://media2.newlookassets.com/i/newlook/877244292.jpg?strip=true&qlt=50&fmt=webp&w=526"
                  }
                  alt=""
                />
                <img
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  src={
                    "https://media2.newlookassets.com/i/newlook/872142904.jpg?strip=true&qlt=50&fmt=webp&w=526"
                  }
                  alt=""
                />
                <img
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  src={
                    "https://media2.newlookassets.com/i/newlook/884287955.jpg?strip=true&qlt=50&fmt=webp&w=526"
                  }
                  alt=""
                />
              </Flex>
              <Link className={Style.LinkShop} to={"/allProducts"}>
                <Text
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className={Style.cursoreP}
                  pt={25}
                  pl={46}
                  fz={50}
                  fw={700}
                  c="#FFFFFF"
                  ff={"Noto Sans"}
                >{`SHOP NOW ->`}</Text>
              </Link>
            </Box>
          </Box>
          <Box w="49%" h="60vh" bg="#545454">
            <Box pt={30}>
              <Text
                data-aos="fade-down"
                data-aos-duration="800"
                fz={50}
                pl={46}
                fw={700}
                c="#FFFFFF"
              >
                MEN
              </Text>
              <Flex className={Style.caruselProducts} justify="end" gap={3}>
                <img
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  src={
                    "https://media3.newlookassets.com/i/newlook/848824927.jpg?strip=true&qlt=50&fmt=webp&w=526"
                  }
                  alt=""
                />
                <img
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  src={
                    "https://media2.newlookassets.com/i/newlook/842893424.jpg?strip=true&qlt=50&fmt=webp&w=526"
                  }
                  alt=""
                />
                <img
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  src={
                    "https://media2.newlookassets.com/i/newlook/864571724.jpg?strip=true&qlt=50&fmt=webp&w=526"
                  }
                  alt=""
                />
                <img
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  src={
                    "https://media2.newlookassets.com/i/newlook/859567924.jpg?strip=true&qlt=50&fmt=webp&w=526"
                  }
                  alt=""
                />
              </Flex>
              <Link className={Style.LinkShop} to={"/allProducts"}>
                <Text
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className={Style.cursoreP}
                  pt={25}
                  pl={46}
                  fz={50}
                  fw={700}
                  c="#FFFFFF"
                  ff={"Noto Sans"}
                >{`SHOP NOW ->`}</Text>
              </Link>
            </Box>
          </Box>
        </Flex>
        <Box h="auto" w="100%">
          <Box mt={20} mb={20}>
            <Text
              data-aos="fade-right"
              data-aos-duration="800"
              pt={10}
              fz={50}
              ff={"Noto Sans"}
              pl={60}
              fw={700}
            >
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
                    <img
                      src={
                        "https://media3.newlookassets.com/i/newlook/864355816.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      Jack & Jones Stone Suede Lace Front Boat Shoes
                    </p>
                    <Flex gap={10}>
                      <p className={Style.cost}>Us $43.00</p>
                      <p className={Style.costakk}>Us $47</p>
                    </Flex>
                  </div>
                  <div className={Style.releasesBox}>
                    <img
                      src={
                        "https://media2.newlookassets.com/i/newlook/850949801.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      Black Moulded Sliders Rubber Soft And Comfortable
                    </p>
                    <Flex gap={10}>
                      <p className={Style.cost}>Us $11.99</p>
                      <p className={Style.costakk}>Us $13.99</p>
                    </Flex>
                  </div>
                  <div className={Style.releasesBox}>
                    <img
                      src={
                        "https://media2.newlookassets.com/i/newlook/870733618.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      Tan Suedette Faux Fur Lined Chunky Boots
                    </p>
                    <p className={Style.cost}>Us $25.99</p>
                  </div>
                  <div className={Style.releasesBox}>
                    <img
                      src={
                        "https://media3.newlookassets.com/i/newlook/852912901.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      Black Suedette 2 Part Platform Block Heel Sandals
                    </p>
                    <Flex gap={10}>
                      <p className={Style.cost}>Us $32.99</p>
                      <p className={Style.costakk}>Us $35.99</p>
                    </Flex>
                  </div>
                  <div className={Style.releasesBox}>
                    <img
                      src={
                        "https://media3.newlookassets.com/i/newlook/850774301.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      ONLY Black Leather-Look Chunky Lace Up Boots
                    </p>
                    <p className={Style.cost}>Us $60</p>
                  </div>
                  <div className={Style.releasesBox}>
                    <img
                      src={
                        "https://media3.newlookassets.com/i/newlook/824021027.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      Dark Brown Leather-Look Lace Up Brogues
                    </p>
                    <Flex gap={10}>
                      <p className={Style.cost}>Us $29.99</p>
                      <p className={Style.costakk}>Us $31.99</p>
                    </Flex>
                  </div>
                </Flex>
              </ScrollArea>
            </Flex>
          </Box>
        </Box>
        <Box h="auto" w="100%">
          <Box mt={20} pb={20} bg={"#C4C4C4"}>
            <Text
              data-aos="fade-right"
              data-aos-duration="800"
              pt={30}
              fz={50}
              ff={"Noto Sans"}
              pl={60}
              fw={700}
            >
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
                    <img
                      src={
                        "https://media3.newlookassets.com/i/newlook/859427116.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      Jack & Jones Stone Contrast Stripe Trainers
                    </p>
                    <Flex gap={10}>
                      <p className={Style.cost}>Us $41.24</p>
                      <p className={Style.costakk}>Us $44.00</p>
                    </Flex>
                  </div>
                  <div className={Style.releasesBox}>
                    <img
                      src={
                        "https://media2.newlookassets.com/i/newlook/832136809M2/mens/mens-footwear/mens-shoes/black-contrast-panel-chunky-trainers.jpg?strip=true&qlt=50&w=720"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      Black Contrast Panel Chunky Trainers <br /> Nike
                    </p>
                    <p className={Style.cost}>Us $31.00</p>
                  </div>
                  <div className={Style.releasesBox}>
                    <img
                      src={
                        "https://media3.newlookassets.com/i/newlook/859396310.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      Jack & Jones White Leather-Look Lace Up Trainers
                    </p>
                    <Flex gap={10}>
                      <p className={Style.cost}>Us $35.00</p>
                      <p className={Style.costakk}>Us $39.00</p>
                    </Flex>
                  </div>
                  <div className={Style.releasesBox}>
                    <img
                      src={
                        " https://media3.newlookassets.com/i/newlook/859419204.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      Jack & Jones Grey Suede Lace Up Trainers
                    </p>
                    <Flex gap={10}>
                      <p className={Style.cost}>Us $50.00</p>
                      <p className={Style.costakk}>Us $59.00</p>
                    </Flex>
                  </div>

                  <div className={Style.releasesBox}>
                    <img
                      src={
                        "https://media2.newlookassets.com/i/newlook/859441310.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      Giuseppe Zanotti Kriss Logo Low-Top Sneakers
                    </p>
                    <p className={Style.cost}>Us $67</p>
                  </div>
                  <div className={Style.releasesBox}>
                    <img
                      src={
                        "https://media3.newlookassets.com/i/newlook/859419216.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      Jack & Jones Stone Suede Lace Up Brown
                    </p>
                    <Flex gap={10}>
                      <p className={Style.cost}>Us $50.00</p>
                      <p className={Style.costakk}>Us $55.00</p>
                    </Flex>
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
