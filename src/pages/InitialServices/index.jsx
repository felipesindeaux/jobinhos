import { Layer } from "grommet";
import { useState } from "react";

import MainCards from "../../Components/MainCards";
import Modal from "../../Components/Modal";

const InitialServices = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h4>InitialServices</h4>
      <MainCards open={open} setOpen={setOpen}></MainCards>

      {open && (
        <Layer
          onClickOutside={() => setOpen(false)}
          onEsc={() => setOpen(false)}
        >
          <Modal setOpen={setOpen} />
        </Layer>
      )}
    </div>
  );
};

export default InitialServices;
