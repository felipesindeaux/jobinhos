import { CarouselFix, Container } from "./styled";
import { Box, TextInput, Layer, Carousel, Image } from "grommet";
import { useState } from "react";
import { Search } from "grommet-icons";
import MainCards from "../../components/MainCards";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import { useContext } from "react";
import { ServicesContext } from "../../Providers/Services";

const InitialServices = () => {
  const { services, filterServices } = useContext(ServicesContext);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const { hireService } = useContext(ServicesContext);

  return (
    <>
      <Header whiteTheme />

      <Box height="medium">
        <Carousel controls={false} fill play={2500}>
          <Image
            fit="cover"
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          />
          <Image
            fit="cover"
            src="https://cdn.pixabay.com/photo/2018/11/29/21/51/social-media-3846597_960_720.png"
          />
          <Image
            fit="cover"
            src="https://cdn.pixabay.com/photo/2020/01/21/17/17/hr-process-4783430_960_720.png"
          />
        </Carousel>
      </Box>

      <Container>
        <Box fill align="center" justify="start" pad="large">
          <Box width="large" gap="medium">
            <TextInput
              color="brand"
              icon={<Search />}
              reverse
              placeholder="O que você procura? ..."
              plain={false}
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                filterServices(event.target.value);
              }}
            />
          </Box>
        </Box>
      </Container>
      <MainCards
        open={open}
        setOpen={setOpen}
        arrayToRender={services}
      ></MainCards>

      {open && (
        <Layer
          onClickOutside={() => setOpen(false)}
          onEsc={() => setOpen(false)}
        >
          {hireService.map((item, index) => (
            <Modal
              key={index}
              setOpen={setOpen}
              imgs={item.images}
              name={item.name}
              title={item.title}
              price={item.price}
              id={item.id}
              userId={item.userId}
              userImage={item.userImage}
              tag={item.tags}
              desc={item.desc}
            />
          ))}
        </Layer>
      )}
    </>
  );
};

export default InitialServices;
