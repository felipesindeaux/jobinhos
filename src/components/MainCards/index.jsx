import CardsServices from "../../components/CardsServices";
import { Container } from "./styled";
import { useContext } from "react";
import { PendingsContext } from "../../Providers/Pendings";
import { useState } from "react";
import { Box, Grid, InfiniteScroll } from "grommet";

const MainCards = ({
  setOpen,
  alternative,
  arrayToRender,
  setServiceHired,
  setServiceID,
}) => {
 
  return (
    
    <Container>
      <Grid columns="270px" overflow='auto' gap='large'>
      <InfiniteScroll items={arrayToRender} step={1}>
      {
        (item, index) => {

          const name = alternative ? item.hirerName : item.name;

          return (
            <CardsServices
              key={index}
              images={item.images}
              name={name}
              title={item.title}
              price={item.price}
              id={item.id}
              desc={item.desc}
              setOpen={setOpen}
              alternative={alternative}
              setServiceHired={setServiceHired}
              setServiceID={setServiceID}
              pendingId={item.pendingId}
              pendingStatus={item.pendingStatus}
              tag = {item.tags}
              userImage={item.userImage}
            />
          );
        }}
        </InfiniteScroll>
      </Grid>
    </Container>    

  );
};

export default MainCards;
