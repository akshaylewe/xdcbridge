import { Box } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Faq from "react-faq-component";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

import "./Liquidity.css";

const data = {
  title: "Swapping FAQ",
  rows: [
    {
      title: "What is swapping?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "How much gas fee I need to pay?",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "What is Slippage Tolerance?",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "Which Tokens I can swap on this platform?",
      content: <p>current version is 1.2.1</p>,
    },
    {
      title: "My Token is not listed here. What to do?",
      content: <p>current version is 1.2.1</p>,
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "#101010",
  rowTitleColor: "#101010",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

const style = {
  position: "absolute",
  top: "28%",
  left: "55%",
  transform: "translate(-50%, -50%)",
  width: "441px",
  height: "310px",
  bgcolor: "background.paper",
  p: 4,
  borderRadius: "12px",
};
function Liquidity() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className="swap-box">
      <Card className="swap-card-add">
        <Card.Body>
          <Card.Title className="card-title">
            {/* <img className="mr-10" src="/images/Auto fresh on.svg" /> */}
            {"  "}

            {"  "}

            {/* <button className="auto-refresh">
                {" "}
                <img src="/images/settings.svg" />
              </button> */}

            <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                  <button
                    className="auto-refresh"
                    variant="contained"
                    {...bindTrigger(popupState)}
                  >
                    <img src="/images/settings.svg" />
                  </button>
                  <Popover
                    style={{
                      width: "351px !important",
                      height: "431px !important",
                    }}
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <Typography sx={{ p: 2 }}>Transaction Settings</Typography>
                    <br />
                    {/* <p>Slippage Tolerance</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {" "}
                      <bitton>Auto</bitton>
                      <input placeholder="0.10%"></input>
                    </div> */}
                  </Popover>
                </div>
              )}
            </PopupState>

            {"  "}
          </Card.Title>
          <Card.Subtitle className="mb3 text-muted">
            {/* <Form.Label className="you-label">You Pay</Form.Label> */}
            <div style={{ display: "flex" }} className="w-440 h-48">
              <Form.Control
                className="pay-input"
                size="lg"
                type="text"
                placeholder="0"
              />
              <Form.Select
                className="pay-select"
                aria-label="Default select example"
              >
                <option>Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
          </Card.Subtitle>

          <Card.Subtitle className="mb-2 text-muted">
            {/* <Form.Label className="you-label">You Get</Form.Label> */}
            <div style={{ display: "flex" }} className="w-440 h-48">
              <Form.Control
                className="pay-input"
                size="lg"
                type="text"
                placeholder="0"
              />
              <Form.Select
                className="pay-select"
                aria-label="Default select example"
              >
                <option>Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
          </Card.Subtitle>
          <div className="mt-90">
            <div style={{ display: "flex", justifyContent: "end" }}>
              <OverlayTrigger
                delay={{ hide: 450, show: 300 }}
                overlay={(props) => (
                  <Tooltip {...props} id="tooltip-top">
                    <p className="refresh">Transaction Deatails</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {" "}
                      <p className="refresh-p">Gas fee</p>{" "}
                      <p className="refresh-p">150 Gwei</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {" "}
                      <p className="refresh-p">Allowed Slippage</p>{" "}
                      <p className="refresh-p">0.10%</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {" "}
                      <p className="refresh-p">Minimum Received</p>{" "}
                      <p className="refresh-p">420 USDT</p>
                    </div>
                  </Tooltip>
                )}
                placement="bottom"
              >
                <button className="auto-refresh">
                  {" "}
                  <img src="/images/info.svg" />
                </button>
              </OverlayTrigger>
            </div>

            <Button className="swap-button" onClick={handleOpen}>
            Add Liquidity
            </Button>
            <Modal
              className="swap-modal"
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {" "}
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Waiting for confirmation
                  </Typography>
                  <button
                    onClick={handleClose}
                    className="auto-refresh close-button"
                  >
                    {" "}
                    <img src="/images/Close.svg" />
                  </button>
                </div>
                {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography> */}
              </Box>
            </Modal>
          </div>
        </Card.Body>
      </Card>
      <div className="faq">
        <Faq data={data} styles={styles} config={config} />
      </div>
    </Box>
  );
}

export default Liquidity;
