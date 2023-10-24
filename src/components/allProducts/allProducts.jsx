import { Box, Flex, List, Paper, ScrollArea, Text } from "@mantine/core";
import React from "react";
import Logo from "../assets/logo.png";
import Style from "../web.module.scss";

import { useState } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

function AllProducts() {
  useEffect(() => {
    AOS.init();
  });
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });
  return (
    <Box maw={"100%"} w={"100%"} h={"auto"}>
      <Box maw="100%" w="100%" h={100} bg="#545454">
        <Flex pt={20} gap={200} align="center" justify="space-around">
          <Flex gap={50}>
            <Flex gap={30} align="center" justify="center">
              <a href="#women" className={Style.HeaderLinks}>
                <List data-aos="zoom-in" data-aos-duration="700">
                  <Paper
                    className={Style.links}
                    radius="lg"
                    p={6}
                    w={100}
                    h={40}
                    bg="#000000"
                    c="#FFFFFF"
                    ta="center"
                  >
                    <Text ta="center" fz={17} fw={700} lts={2}>
                      WOMEN
                    </Text>
                  </Paper>
                </List>
              </a>

              <a href="#men" className={Style.HeaderLinks}>
                <List data-aos="zoom-in" data-aos-duration="800">
                  <Paper
                    className={Style.links}
                    radius="lg"
                    p={6}
                    w={100}
                    h={40}
                    bg="#000000"
                    c="#FFFFFF"
                    ta="center"
                  >
                    <Text ta="center" fz={17} fw={700} lts={2}>
                      MEN
                    </Text>
                  </Paper>
                </List>
              </a>

              <a href="#kids" className={Style.HeaderLinks}>
                <List data-aos="zoom-in" data-aos-duration="900">
                  <Paper
                    className={Style.links}
                    radius="lg"
                    p={6}
                    w={100}
                    h={40}
                    bg="#000000"
                    c="#FFFFFF"
                    ta="center"
                  >
                    <Text ta="center" fz={17} fw={700} lts={2}>
                      KIDS
                    </Text>
                  </Paper>
                </List>
              </a>

              <Link className={Style.HeaderLinks} to="/">
                <List data-aos="zoom-in" data-aos-duration="1000">
                  <Paper
                    className={Style.links}
                    radius="lg"
                    p={6}
                    w={100}
                    h={40}
                    bg="#000000"
                    c="#FFFFFF"
                    ta="center"
                  >
                    <Text ta="center" fz={17} fw={700} lts={2}>
                      SALE
                    </Text>
                  </Paper>
                </List>
              </Link>
            </Flex>

            <Box data-aos="zoom-in" data-aos-duration="1000">
              <img src={Logo} alt="" />
            </Box>
          </Flex>
          <Flex gap={100} align="center" justify="center">
            <Box
              data-aos="zoom-in"
              data-aos-duration="1000"
              className={Style.linkIcons}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M3.20853 3.20822C-1.06971 7.48584 -1.06931 14.4507 3.20853 18.7283C6.72993 22.2495 12.065 22.8705 16.2308 20.5956L24.5488 29.3983C25.3493 30.1979 26.6544 30.2032 27.4593 29.3983L29.3999 27.4582C30.2 26.6581 30.2 25.3483 29.3999 24.5482L20.5964 16.2307C22.871 12.0646 22.2504 6.72944 18.729 3.20822C14.4511 -1.06941 7.48596 -1.06941 3.20853 3.20822ZM28.4296 25.5181C28.6969 25.7853 28.6969 26.2219 28.4296 26.4887L26.4894 28.4284C26.2222 28.6949 25.7863 28.6949 25.5191 28.4284L18.4039 20.8281C18.8648 20.4743 19.3011 20.0959 19.6985 19.6981C20.0919 19.3048 20.4695 18.8686 20.824 18.3984L28.4296 25.5181ZM19.5772 15.2115C19.1309 16.1333 18.5204 16.9964 17.7587 17.758C16.997 18.5197 16.1334 19.1309 15.2124 19.5769C11.6284 21.3472 7.16172 20.7408 4.17843 17.758C0.434263 14.0136 0.433858 7.92245 4.17843 4.17807C7.9226 0.434089 14.0145 0.434089 17.7587 4.17807C20.7416 7.1608 21.3476 11.628 19.5772 15.2115Z"
                  fill="white"
                />
                <path
                  d="M5.63232 5.63346C2.69027 8.57536 2.69027 13.3616 5.63232 16.3039C8.57396 19.2454 13.3608 19.2454 16.3029 16.3039C19.2441 13.362 19.2441 8.57536 16.3029 5.63346C13.3608 2.69196 8.57396 2.69196 5.63232 5.63346ZM15.3326 15.3332C12.9258 17.7402 9.00898 17.7402 6.60222 15.3332C4.19546 12.9266 4.19546 9.01036 6.60222 6.60371C9.00939 4.19667 12.9258 4.19667 15.3326 6.60371C17.7393 9.01036 17.7393 12.9266 15.3326 15.3332Z"
                  fill="white"
                />
              </svg>
            </Box>
            <Box
              data-aos="zoom-in"
              data-aos-duration="1100"
              className={Style.linkIcons}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M4.87122 30H25.1288C27.8163 30 30 27.5625 30 24.5625V7.275C30 6.975 29.7648 6.7125 29.4961 6.7125H28.2531V0H1.74692V6.7125H0.503919C0.235162 6.7125 0 6.975 0 7.275V24.5625C0 27.5625 2.18365 30 4.87122 30ZM24.0873 3.9375L27.2116 1.6125V6.225L24.0873 3.9375ZM26.0358 6.7125H23.6842V4.95L26.0358 6.7125ZM26.0358 1.125L22.9115 3.45C22.8779 3.4875 22.8443 3.525 22.8108 3.5625C22.7772 3.6 22.7772 3.6375 22.7436 3.6375C22.7436 3.6375 22.7436 3.6375 22.7436 3.675C22.7436 3.7125 22.71 3.75 22.71 3.7875C22.71 3.7875 22.71 3.7875 22.71 3.825C22.71 3.8625 22.71 3.9 22.71 3.9375V6.75H7.29003V3.9375C7.29003 3.9 7.29003 3.8625 7.29003 3.825C7.29003 3.825 7.29003 3.825 7.29003 3.7875C7.29003 3.75 7.25644 3.7125 7.25644 3.675C7.25644 3.675 7.25644 3.675 7.25644 3.6375C7.22284 3.6 7.22284 3.5625 7.18925 3.5625C7.15566 3.525 7.12206 3.4875 7.08847 3.45L3.93057 1.125H26.0358ZM2.75476 1.6125L5.87906 3.9375L2.75476 6.2625V1.6125ZM6.2822 4.95V6.7125H3.93057L6.2822 4.95ZM1.00784 7.8375H28.9586V24.5625C28.9586 26.925 27.2452 28.875 25.0952 28.875H4.87122C2.75476 28.875 1.00784 26.9625 1.00784 24.5625V7.8375Z"
                  fill="white"
                />
                <path
                  d="M6.68545 12.45C6.95421 12.45 7.18937 12.1875 7.18937 11.8875C7.18937 11.4 7.35734 10.95 7.65969 10.6125C7.96204 10.275 8.36518 10.0875 8.80191 10.05C9.70896 10.05 10.448 10.875 10.4816 11.85C10.4816 12.15 10.7168 12.4125 10.9856 12.4125C11.2543 12.4125 11.4895 12.15 11.4895 11.85C11.4559 10.2375 10.2801 8.925 8.8355 8.925C8.13002 8.925 7.45812 9.225 6.95421 9.825C6.45029 10.3875 6.18153 11.1375 6.21512 11.925C6.18153 12.225 6.41669 12.45 6.68545 12.45Z"
                  fill="white"
                />
                <path
                  d="M18.9474 12.45C18.9474 12.45 18.981 12.45 18.9474 12.45C19.2161 12.45 19.4513 12.1875 19.4513 11.8875C19.4513 11.4 19.6193 10.95 19.9216 10.6125C20.224 10.275 20.6271 10.0875 21.0638 10.05C21.9709 10.05 22.71 10.875 22.7436 11.85C22.7436 12.15 22.9787 12.4125 23.2475 12.4125C23.5162 12.4125 23.7514 12.15 23.7514 11.85C23.7178 10.2375 22.542 8.925 21.0974 8.925C20.3919 8.925 19.7201 9.225 19.2161 9.825C18.7122 10.3875 18.4435 11.1375 18.4771 11.925C18.4771 12.225 18.6786 12.45 18.9474 12.45Z"
                  fill="white"
                />
                <path
                  d="M9.33938 13.2375V11.25C9.33938 10.95 9.10422 10.6875 8.83546 10.6875C8.56671 10.6875 8.33154 10.95 8.33154 11.25V13.2375C8.33154 16.5375 11.3215 19.2375 14.9833 19.2375C18.6451 19.2375 21.635 16.5375 21.635 13.2375V11.25C21.635 10.95 21.3999 10.6875 21.1311 10.6875C20.8623 10.6875 20.6272 10.95 20.6272 11.25V13.2375C20.6272 15.9375 18.1076 18.1125 14.9833 18.1125C11.859 18.1125 9.33938 15.9375 9.33938 13.2375Z"
                  fill="white"
                />
              </svg>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <section id="women">
        <Box h="auto" w="100%">
          <Box mt={20}>
            <Text
              data-aos="fade-right"
              data-aos-duration="800"
              pt={10}
              fz={50}
              ff={"Noto Sans"}
              pl={60}
              fw={700}
            >
              WOMEN
            </Text>
            <Flex mt={20} justify="center" align="center" gap={100}>
              <ScrollArea
                onScrollPositionChange={onScrollPositionChange}
                w={1395}
                h={"auto"}
              >
                <Flex justify="space-between" gap={95}>
                  <div className={Style.releasesBox}>
                    <img
                      src={
                        "https://media2.newlookassets.com/i/newlook/877413292.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>Silver Slim Block Heel Boots</p>
                    <Flex>
                      <p className={Style.cost}>Us $42.99</p>
                      <p className={Style.costakk}>Us $47.99</p>
                    </Flex>
                  </div>
                  <div className={Style.releasesBox}>
                    <img
                      src={
                        "https://media3.newlookassets.com/i/newlook/879521701.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>Black Suedette Chelsea Boots</p>
                    <Flex gap={10}>
                      <p className={Style.cost}>Us $31</p>
                      <p className={Style.costakk}>Us $35.99</p>
                    </Flex>
                  </div>
                  <div className={Style.releasesBox}>
                    <img
                      src={
                        "https://media2.newlookassets.com/i/newlook/876267001.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      Black Leather-Look Stiletto Heel Boots
                    </p>
                    <p className={Style.cost}>Us $39.99</p>
                  </div>
                  <div className={Style.releasesBox}>
                    <img
                      src={
                        "https://media2.newlookassets.com/i/newlook/870733618.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      Tan Suedette Faux Fur Chunky Boots
                    </p>
                    <Flex gap={10}>
                      <p className={Style.cost}>Us $25.999</p>
                      <p className={Style.costakk}>Us $25.99</p>
                    </Flex>
                  </div>
                  <div className={Style.releasesBox}>
                    <img
                      src={
                        "https://media2.newlookassets.com/i/newlook/877244292.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      Silver Glitter Block Heel Court Shoes
                    </p>
                    <p className={Style.cost}>Us $29.99</p>
                  </div>
                  <div className={Style.releasesBox}>
                    <img
                      src={
                        "https://media2.newlookassets.com/i/newlook/854321693.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>Gold 2 Part Block Heel Sandals</p>
                    <Flex gap={10}>
                      <p className={Style.cost}>Us $35.99</p>
                      <p className={Style.costakk}>Us $39.99</p>
                    </Flex>
                  </div>
                  <div className={Style.releasesBox}>
                    <img
                      src={
                        "https://media2.newlookassets.com/i/newlook/877293138.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      Dark Green Velvet 2 Part Block Sandals
                    </p>
                    <p className={Style.cost}>Us $32.99</p>
                  </div>
                  <div className={Style.releasesBox}>
                    <img
                      src={
                        "https://media2.newlookassets.com/i/newlook/884287955.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      Skinnydip Lilac Fluffy Slipper Boots
                    </p>
                    <p className={Style.cost}>Us $24.00</p>
                  </div>
                </Flex>
              </ScrollArea>
            </Flex>
          </Box>
        </Box>
      </section>
      <section id="men">
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
              MEN
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
                        "https://media2.newlookassets.com/i/newlook/842893424.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      Rust Leather Perforated Lace Up Brogues
                    </p>
                    <p className={Style.cost}>Us $41.99</p>
                  </div>
                  <div className={Style.releasesBox}>
                    <img
                      src={
                        "https://media3.newlookassets.com/i/newlook/832073901.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      Black Stitch Lace Up Shoes Black & <br /> Brown
                    </p>
                    <Flex gap={10}>
                      <p className={Style.cost}>Us $32.99</p>
                      <p className={Style.costakk}>Us $37.99</p>
                    </Flex>
                  </div>
                  <div className={Style.releasesBox}>
                    <img
                      src={
                        "https://media2.newlookassets.com/i/newlook/849531703.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      Dark Grey Plain Sliders Soft And <br />
                      Compact
                    </p>
                    <Flex gap={10}>
                      <p className={Style.cost}>Us $9</p>
                      <p className={Style.costakk}>Us $12.99</p>
                    </Flex>
                  </div>
                  <div className={Style.releasesBox}>
                    <img
                      src={
                        "https://media2.newlookassets.com/i/newlook/843471003.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      Jack & Jones Dark Grey Canvas Chunky Trainers
                    </p>
                    <p className={Style.cost}>Us $26.24</p>
                  </div>
                  <div className={Style.releasesBox}>
                    <img
                      src={
                        "https://media3.newlookassets.com/i/newlook/847773627.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      Jack & Jones Dark Brown Leather <br /> Boots
                    </p>
                    <Flex gap={10}>
                      <p className={Style.cost}>Us $67.49</p>
                      <p className={Style.costakk}>Us $89.99</p>
                    </Flex>
                  </div>
                  <div className={Style.releasesBox}>
                    <img
                      src={
                        "https://media2.newlookassets.com/i/newlook/864354827.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      Jack & Jones Dark Brown Leather Buckle Sliders
                    </p>
                    <p className={Style.cost}>Us $24</p>
                  </div>
                  <div className={Style.releasesBox}>
                    <img
                      src={
                        "https://media3.newlookassets.com/i/newlook/859414541.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      Jack & Jones Navy Canvas Slip On Trainers
                    </p>
                    <p className={Style.cost}>Us $23.99</p>
                  </div>
                  <div className={Style.releasesBox}>
                    <img
                      src={
                        "https://media2.newlookassets.com/i/newlook/859567924.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      Jack & Jones Rust Leather Lace Up Rounded Brogues
                    </p>
                    <p className={Style.cost}>Us $43.00</p>
                  </div>
                </Flex>
              </ScrollArea>
            </Flex>
          </Box>
        </Box>
      </section>
      <section id="kids">
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
              KIDS
            </Text>
            <Flex mt={20} justify="center" align="center" gap={100}>
              <ScrollArea
                onScrollPositionChange={onScrollPositionChange}
                w={1395}
                h={"auto"}
              >
                <Flex justify="space-between" gap={95}>
                  <div className={Style.releasesBox}>
                    <Link to={"/allProducts/showChosen"}>
                      <img
                        src={
                          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9966ff09-0dee-49d3-a8b1-292a09cd03a5/air-jordan-xxxviii-fiba-big-kids-shoes-1N6m7f.png"
                        }
                        alt=""
                      />
                    </Link>
                    <p className={Style.name}>
                      Air Jordan XXXVIII "FIBA" Big Kids' Shoes
                    </p>
                    <Flex gap={10}>
                      <p className={Style.cost}>Us $150</p>
                      <p className={Style.costakk}>Us $180.99</p>
                    </Flex>
                  </div>
                  <div className={Style.releasesBox}>
                    <img
                      src={
                        "https://media2.newlookassets.com/i/newlook/872125504.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      Grey Faux Fur Slipper Boots <br /> Soft
                    </p>
                    <Flex gap={10}>
                      <p className={Style.cost}>Us $16.99</p>
                      <p className={Style.costakk}>Us $18.99</p>
                    </Flex>
                  </div>
                  <div className={Style.releasesBox}>
                    <img
                      src={
                        "https://media2.newlookassets.com/i/newlook/884287021.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      Skinnydip Light Brown Faux Fur Cat Slippers
                    </p>
                    <p className={Style.cost}>Us $22.00</p>
                  </div>
                  <div className={Style.releasesBox}>
                    <img
                      src={
                        "https://media2.newlookassets.com/i/newlook/873048413.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      Cream Fair Isle Knit Slipper Boots Soft And Comfort
                    </p>
                    <p className={Style.cost}>Us $16.99</p>
                  </div>
                  <div className={Style.releasesBox}>
                    <img
                      src={
                        "https://media2.newlookassets.com/i/newlook/853189735.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      Green Canvas High Top Trainers With Any Colors
                    </p>
                    <Flex gap={10}>
                      <p className={Style.cost}>Us $15.00</p>
                      <p className={Style.costakk}>Us $18.99</p>
                    </Flex>
                  </div>
                  <div className={Style.releasesBox}>
                    <img
                      src={
                        "https://media2.newlookassets.com/i/newlook/801470204.jpg?strip=true&qlt=50&fmt=webp&w=526"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      Girls Grey Star Faux Fur Chunky Slider Slippers
                    </p>
                    <Flex gap={10}>
                      <p className={Style.cost}>Us $7.00</p>
                      <p className={Style.costakk}>Us $8.00</p>
                    </Flex>
                  </div>
                  <div className={Style.releasesBox}>
                    <img
                      src={
                        "https://media2.newlookassets.com/i/newlook/884287955/womens/clothing/nightwear/skinnydip-lilac-fluffy-slipper-boots.jpg?strip=true&qlt=50&w=720"
                      }
                      alt=""
                    />
                    <p className={Style.name}>
                      Skinnydip Lilac Fluffy Slipper Boots And Soft
                    </p>
                    <p className={Style.cost}>Us $24.00</p>
                  </div>
                </Flex>
              </ScrollArea>
            </Flex>
          </Box>
        </Box>
      </section>
      <Box maw="100%" w="100%" h="auto" pb={20} bg="black">
        <Box pt={30}>
          <Flex justify="space-around" align="center">
            <Box c="#fff">
              <div data-aos="fade-right" data-aos-duration="800">
                <Text fz={30}>MY ACCOUNT</Text>
              </div>
              <Box pt={10}>
                <Text
                  data-aos="fade-right"
                  data-aos-duration="900"
                  fz={25}
                  pt={10}
                >
                  Sign In
                </Text>
                <Text
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  fz={25}
                  pt={10}
                >
                  Register
                </Text>
                <Text
                  data-aos="fade-right"
                  data-aos-duration="1100"
                  fz={25}
                  pt={10}
                >
                  Order Status
                </Text>
              </Box>
            </Box>
            <Box c="#fff">
              <Text data-aos="fade-left" data-aos-duration="800" fz={30}>
                ABOUT
              </Text>
              <Box pt={10}>
                <Text
                  data-aos="fade-left"
                  data-aos-duration="900"
                  fz={25}
                  pt={10}
                >
                  My Store{" "}
                </Text>
                <Text
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  fz={25}
                  pt={10}
                >
                  Media
                </Text>
                <Text
                  data-aos="fade-left"
                  data-aos-duration="1100"
                  fz={25}
                  pt={10}
                >
                  Sustainability
                </Text>
              </Box>
            </Box>
            <Box c="#fff">
              <Text data-aos="fade-right" data-aos-duration="800" fz={30}>
                HELP
              </Text>
              <Box pt={10}>
                <Text
                  data-aos="fade-right"
                  data-aos-duration="900"
                  fz={25}
                  pt={10}
                >
                  Shipping
                </Text>
                <Text
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  fz={25}
                  pt={10}
                >
                  Returns
                </Text>
                <Text
                  data-aos="fade-right"
                  data-aos-duration="1100"
                  fz={25}
                  pt={10}
                >
                  Sizing
                </Text>
              </Box>
            </Box>
            <Box c="#fff">
              <Text data-aos="fade-left" data-aos-duration="800" fz={30}>
                LEGAL STUFF
              </Text>
              <Box pt={10}>
                <Text
                  data-aos="fade-left"
                  data-aos-duration="900"
                  fz={25}
                  pt={10}
                >
                  Terms Of Use
                </Text>
                <Text
                  data-aos="fade-lefy"
                  data-aos-duration="1000"
                  fz={25}
                  pt={10}
                >
                  Terms Of Sale
                </Text>
                <Text
                  data-aos="fade-left"
                  data-aos-duration="1100"
                  fz={25}
                  pt={10}
                >
                  Privacy Policy
                </Text>
              </Box>
            </Box>
          </Flex>
        </Box>
        <Text data-aos="zoom-in" c="#ffffff" ta="center" fz={35} pt={40}>
          Follow Us
        </Text>
        <Flex justify="center" align="center" gap={50} pt={15}>
          <Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10.0138 0.487975C15.2656 0.487975 19.5105 4.73614 19.5105 9.9958C19.5105 14.9802 15.6825 19.0735 10.823 19.4681C10.5541 19.5168 10.2817 19.5168 10.014 19.5168C9.30254 19.5168 8.61265 19.4457 7.95228 19.2949C3.68184 18.3416 0.490176 14.5321 0.490176 9.99556C0.489696 4.73614 4.76253 0.487975 10.0138 0.487975ZM10.0138 0C4.49272 0 0 4.48783 0 9.99556C0 14.634 3.29969 18.7493 7.84378 19.774C8.53031 19.9248 9.25958 20 10.0138 20C10.3095 20 10.6122 20 10.907 19.9534C15.9835 19.5432 20 15.1707 20 9.99556C19.9998 4.48783 15.5186 0 10.0138 0Z"
                fill="white"
              />
              <path
                d="M11.0926 8.24045C11.2388 8.0673 11.5343 7.94339 11.9524 7.94339C12.3432 7.94339 12.8104 8.00102 13.2525 8.12518L13.6215 6.12957C12.8617 5.86349 12.0765 5.78809 11.2659 5.78809C10.4545 5.78809 9.8153 5.91224 9.30208 6.2093C8.78574 6.49315 8.44151 6.81687 8.24659 7.28683C8.04999 7.70829 7.95181 8.41311 7.95181 9.30021V10.0852H6.37878V12.3645H7.95181V19.5352C8.61218 19.686 9.30208 19.7571 10.0136 19.7571C10.2812 19.7571 10.5537 19.7571 10.8225 19.7083V12.3645H12.9078V10.0852H10.8225V9.3492C10.8228 8.78582 10.8969 8.44001 11.0926 8.24045Z"
                fill="white"
              />
            </svg>
          </Box>
          <Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10.0138 0.487975C15.2656 0.487975 19.5105 4.73614 19.5105 9.9958C19.5105 14.9802 15.6825 19.0735 10.823 19.4681C10.5541 19.5168 10.2817 19.5168 10.014 19.5168C9.30254 19.5168 8.61265 19.4457 7.95228 19.2949C3.68184 18.3416 0.490176 14.5321 0.490176 9.99556C0.489696 4.73614 4.76253 0.487975 10.0138 0.487975ZM10.0138 0C4.49272 0 0 4.48783 0 9.99556C0 14.634 3.29969 18.7493 7.84378 19.774C8.53031 19.9248 9.25958 20 10.0138 20C10.3095 20 10.6122 20 10.907 19.9534C15.9835 19.5432 20 15.1707 20 9.99556C19.9998 4.48783 15.5186 0 10.0138 0Z"
                fill="white"
              />
              <path
                d="M11.0926 8.24045C11.2388 8.0673 11.5343 7.94339 11.9524 7.94339C12.3432 7.94339 12.8104 8.00102 13.2525 8.12518L13.6215 6.12957C12.8617 5.86349 12.0765 5.78809 11.2659 5.78809C10.4545 5.78809 9.8153 5.91224 9.30208 6.2093C8.78574 6.49315 8.44151 6.81687 8.24659 7.28683C8.04999 7.70829 7.95181 8.41311 7.95181 9.30021V10.0852H6.37878V12.3645H7.95181V19.5352C8.61218 19.686 9.30208 19.7571 10.0136 19.7571C10.2812 19.7571 10.5537 19.7571 10.8225 19.7083V12.3645H12.9078V10.0852H10.8225V9.3492C10.8228 8.78582 10.8969 8.44001 11.0926 8.24045Z"
                fill="white"
              />
            </svg>
          </Box>
          <Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M16.6667 0H3.33333C2.44928 0 1.60143 0.35119 0.976311 0.976311C0.35119 1.60143 0 2.44928 0 3.33333L0 16.6667C0 17.5507 0.35119 18.3986 0.976311 19.0237C1.60143 19.6488 2.44928 20 3.33333 20H16.6667C17.5507 20 18.3986 19.6488 19.0237 19.0237C19.6488 18.3986 20 17.5507 20 16.6667V3.33333C20 2.44928 19.6488 1.60143 19.0237 0.976311C18.3986 0.35119 17.5507 0 16.6667 0V0ZM18.3333 16.6667C18.3333 17.1087 18.1577 17.5326 17.8452 17.8452C17.5326 18.1577 17.1087 18.3333 16.6667 18.3333H3.33333C2.89131 18.3333 2.46738 18.1577 2.15482 17.8452C1.84226 17.5326 1.66667 17.1087 1.66667 16.6667V3.33333C1.66667 2.89131 1.84226 2.46738 2.15482 2.15482C2.46738 1.84226 2.89131 1.66667 3.33333 1.66667H16.6667C17.1087 1.66667 17.5326 1.84226 17.8452 2.15482C18.1577 2.46738 18.3333 2.89131 18.3333 3.33333V16.6667Z"
                fill="white"
              />
              <path
                d="M10 5C9.0111 5 8.0444 5.29324 7.22215 5.84265C6.3999 6.39206 5.75904 7.17295 5.3806 8.08658C5.00217 9.00021 4.90315 10.0055 5.09608 10.9755C5.289 11.9454 5.76521 12.8363 6.46447 13.5355C7.16373 14.2348 8.05465 14.711 9.02455 14.9039C9.99446 15.0969 10.9998 14.9978 11.9134 14.6194C12.827 14.241 13.6079 13.6001 14.1573 12.7779C14.7068 11.9556 15 10.9889 15 10C15 8.67392 14.4732 7.40215 13.5355 6.46447C12.5979 5.52678 11.3261 5 10 5ZM10 13.3333C9.34073 13.3333 8.69627 13.1378 8.1481 12.7716C7.59994 12.4053 7.1727 11.8847 6.9204 11.2756C6.66811 10.6665 6.6021 9.9963 6.73072 9.3497C6.85933 8.7031 7.1768 8.10915 7.64298 7.64298C8.10915 7.1768 8.7031 6.85933 9.3497 6.73072C9.9963 6.6021 10.6665 6.66811 11.2756 6.9204C11.8847 7.17269 12.4053 7.59994 12.7716 8.1481C13.1378 8.69626 13.3333 9.34073 13.3333 10C13.3333 10.8841 12.9821 11.7319 12.357 12.357C11.7319 12.9821 10.8841 13.3333 10 13.3333Z"
                fill="white"
              />
              <path
                d="M15.4166 5.83325C16.107 5.83325 16.6666 5.27361 16.6666 4.58325C16.6666 3.8929 16.107 3.33325 15.4166 3.33325C14.7263 3.33325 14.1666 3.8929 14.1666 4.58325C14.1666 5.27361 14.7263 5.83325 15.4166 5.83325Z"
                fill="white"
              />
            </svg>
          </Box>
          <Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M19.7684 0.402698C19.6132 0.207499 19.3897 0.0782726 19.1429 0.0410252C18.8961 0.00377775 18.6444 0.0612736 18.4383 0.201942L16.5171 1.53342C16.0625 1.05623 15.5148 0.677194 14.9078 0.419746C14.3008 0.162298 13.6474 0.0319023 12.988 0.0366144C11.6819 0.0389558 10.43 0.558218 9.50647 1.48066C8.58295 2.40311 8.06308 3.65354 8.06074 4.95808C8.05479 5.33921 8.09952 5.71944 8.19375 6.08881C5.86463 5.58987 4.49908 3.89525 3.93158 0.833732C3.89668 0.63957 3.80512 0.460037 3.66839 0.31769C3.53166 0.175343 3.35586 0.0765288 3.16309 0.033662C2.97473 -0.017697 2.77514 -0.0101377 2.59122 0.055321C2.4073 0.12078 2.24789 0.24099 2.13449 0.399746C2.06651 0.503076 -3.4282 8.11703 4.53159 14.6032C3.76606 16.2653 1.4665 17.6618 0.556129 18.0928C0.354776 18.1968 0.193457 18.3643 0.0972453 18.5693C0.00103379 18.7744 -0.024681 19.0054 0.0240972 19.2265C0.075081 19.4472 0.199713 19.644 0.37751 19.7846C0.555308 19.9251 0.775693 20.0011 1.00245 20H2.73451C12.8579 20 17.4511 14.9811 17.5841 3.7624L19.6797 1.76666C19.8674 1.59441 19.9814 1.3565 19.9979 1.10244C20.0144 0.848379 19.9322 0.597744 19.7684 0.402698ZM4.36312 17.96C5.39467 17.0743 6.3937 15.8934 6.69223 14.5028C6.73816 14.3141 6.72795 14.1161 6.66285 13.933C6.59774 13.75 6.48058 13.59 6.32572 13.4725C1.59655 9.92973 1.89212 6.02385 2.69904 3.6945C3.96409 6.68812 6.36119 8.21741 9.75733 8.24988C9.94021 8.25357 10.1204 8.20566 10.2773 8.11166C10.4341 8.01766 10.5612 7.88138 10.6441 7.71847C10.742 7.56119 10.7881 7.3772 10.7759 7.19237C10.7637 7.00755 10.6938 6.83119 10.5761 6.68812C10.2136 6.19596 10.0169 5.60154 10.0145 4.99055C10.0153 4.21485 10.3241 3.47113 10.8733 2.92262C11.4224 2.37411 12.167 2.06562 12.9436 2.06484C13.4368 2.06175 13.9224 2.18563 14.3536 2.42454C14.7849 2.66344 15.1472 3.00932 15.4057 3.42879C15.4437 3.48953 15.4894 3.54511 15.5417 3.59412C15.5181 13.1713 12.2195 17.461 4.36312 17.96Z"
                fill="white"
              />
            </svg>
          </Box>
        </Flex>
        <Flex justify="center" align="center" pt={30}>
          <Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.99618 0C4.47419 0 0 4.48012 0 10C0 15.5199 4.48184 20 10.0038 20C15.5258 20 20 15.5199 20 10C20 4.48012 15.5258 0 9.99618 0ZM9.99618 17.63C5.78967 17.63 2.36329 14.2049 2.36329 10C2.36329 5.79511 5.78967 2.37003 9.99618 2.37003C14.2027 2.37003 17.6291 5.79511 17.6291 10C17.6291 14.2049 14.2103 17.63 9.99618 17.63Z"
                fill="white"
              />
              <path
                d="M12.13 11.2155L13.8967 11.7736C13.6291 12.7598 13.1778 13.4861 12.543 13.9678C11.9159 14.4494 11.1128 14.6864 10.1491 14.6864C8.94836 14.6864 7.9694 14.2736 7.19693 13.4555C6.42446 12.6375 6.04205 11.5213 6.04205 10.0993C6.04205 8.6008 6.43211 7.43107 7.20458 6.59774C7.97704 5.76441 9.0019 5.35156 10.2639 5.35156C11.3652 5.35156 12.2677 5.68031 12.956 6.33016C13.369 6.71242 13.6749 7.27052 13.8814 7.98918L12.0765 8.41731C11.9694 7.95095 11.7476 7.58398 11.4111 7.30875C11.0746 7.04117 10.6616 6.90355 10.1797 6.90355C9.51433 6.90355 8.97131 7.14055 8.55066 7.62221C8.13766 8.10386 7.92351 8.87603 7.92351 9.95401C7.92351 11.0932 8.13001 11.9036 8.53536 12.3928C8.94836 12.8745 9.47609 13.1191 10.1338 13.1191C10.6157 13.1191 11.0363 12.9662 11.3805 12.6604C11.7323 12.3623 11.9847 11.873 12.13 11.2155Z"
                fill="white"
              />
            </svg>
          </Box>
          <Text fz={20} c="#fff" lts={2}>
            2021 geo store inc. aLL RIGHTS RESERVED
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default AllProducts;
