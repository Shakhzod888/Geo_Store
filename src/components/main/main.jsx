import { Box, Flex, List, Paper, Text } from "@mantine/core";
import Logo from "../assets/logo.png";
import MainProductImg_0 from "../assets/mainProduct_0.png";

import Style from "../web.module.scss";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { useEffect, useRef } from "react";
import Fade from "react-reveal/Fade";
import { Zoom } from "react-reveal";

const Main = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <>
      <Box maw="100%" w="100%" h="100vh">
        <Box maw="100%" w="100%" h={100} bg="#545454">
          <Flex pt={20} gap={200} align="center" justify="space-around">
            <Flex gap={50}>
              <Flex gap={30} align="center" justify="center">
                <List>
                  <Fade top duration="1000">
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
                  </Fade>
                </List>
                <List>
                  <Fade top duration="1500">
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
                  </Fade>
                </List>
                <List data-aos="fade-down">
                  <Fade top duration="2000">
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
                  </Fade>
                </List>
                <List data-aos="fade-down">
                  <Fade top duration="2500">
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
                  </Fade>
                </List>
              </Flex>

              <Box>
                <img src={Logo} alt="" />
              </Box>
            </Flex>
            <Flex gap={100} align="center" justify="center">
              <Fade top duration="1500">
                <Box className={Style.linkIcons}>
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
              </Fade>
              <Fade top duration="2000">
                <Box className={Style.linkIcons}>
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
              </Fade>
            </Flex>
          </Flex>
        </Box>
        <Box bg="#333" maw="100%" w="100%" className={Style.mainProducts}>
          <Flex>
            <Flex
              maw="44%"
              w="44%"
              className={Style.mainProducts}
              bg="#333333"
              justify="center"
            >
              <Box>
                <Fade left duration="1000">
                  <Text
                    mt={30}
                    fz={90}
                    ff={"Noto Sans"}
                    fw={700}
                    w={500}
                    lts={2}
                    c="#FFFFFF"
                  >
                    BUILT FOR FLIGHT
                  </Text>
                </Fade>
                <Fade left duration="1300">
                  <Text
                    mt={30}
                    ta="center"
                    w={450}
                    ff={"Noto Sans"}
                    fz={20}
                    lts={1}
                    c="#fff"
                  >
                    THIS SPECIAL EDITION TAKES IT A STEP FURTHER BY ADDING
                    GOLDEN ACCENTS ON THE FOREFOOT SWOOSH AND THE HOME PLATE
                    HANGTAG, WHILE STRIKES OF RED ARE SEEN THROUGHOUT THE
                    STRAPS, HEEL-TABS, AND OTHER MINUTIA.
                  </Text>
                </Fade>

                <Fade left duration="1500">
                  <Paper
                    className={Style.buyNowBtn}
                    ml={120}
                    radius="lg"
                    mt={30}
                    w={200}
                    bg="#000000"
                    c="#FFFFFF"
                    ta="center"
                  >
                    <Text ta="center" ff={"Noto Sans"} fz={20} fw={700} lts={2}>
                      BUY NOW
                    </Text>
                  </Paper>
                </Fade>
              </Box>
            </Flex>

            <Box maw="52%" w="52%" className={Style.mainProducts}>
              <Zoom top duration="1000">
                <Carousel
                  w="100%"
                  className={Style.mainProducts}
                  withIndicators
                  plugins={[autoplay.current]}
                  onMouseEnter={autoplay.current.stop}
                  onMouseLeave={autoplay.current.reset}
                >
                  <Carousel.Slide>
                    <img
                      className={Style.productImges}
                      src={MainProductImg_0}
                      alt=""
                    />
                  </Carousel.Slide>
                  <Carousel.Slide>
                    <img
                      className={Style.productImges}
                      src={
                        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2V8ZW58MHx8MHx8fDA%3D"
                      }
                      alt=""
                    />
                  </Carousel.Slide>
                  <Carousel.Slide>
                    <img
                      className={Style.productImges}
                      src={
                        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D"
                      }
                      alt=""
                    />
                  </Carousel.Slide>
                  <Carousel.Slide>
                    <img
                      className={Style.productImges}
                      src={
                        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D"
                      }
                      alt=""
                    />
                  </Carousel.Slide>
                  {/* ...other slides */}
                </Carousel>
              </Zoom>
            </Box>
          </Flex>
        </Box>
        {/* End Main Products */}
      </Box>
    </>
  );
};
export default Main;
