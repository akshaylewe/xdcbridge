import { Box } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CachedIcon from "@mui/icons-material/Cached";
import SettingsIcon from "@mui/icons-material/Settings";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Faq from "react-faq-component";
import "./Swap.css";


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



function SwapCard() {
  return (
    <Box className="swap-box">
      <Card className="swap-card">
        <Card.Body>
          <Card.Title className="card-title">
            <img className="mr-10" src="/images/Auto fresh on.svg" />
            {"  "}
            <img className="mr-10" src="/images/refresh.svg" />
            {"  "}
            <img src="/images/settings.svg" />
            {"  "}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <Form.Label className="you-label">You Pay</Form.Label>
            <div style={{display:"flex"}} className="w-440 h-48">
              <Form.Control className="pay-input" size="lg" type="text" placeholder="0" />
              <Form.Select className="pay-select" aria-label="Default select example">
                <option>SELECT</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
          </Card.Subtitle>
          <Card.Subtitle className="text-muted up-down">
            <img src="/images/swapcard.svg"></img>
            </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
          <Form.Label className="you-label">You Get</Form.Label>
            <div style={{display:"flex"}} className="w-440 h-48">
              <Form.Control className="pay-input" size="lg" type="text" placeholder="0" />
              <Form.Select className="pay-select" aria-label="Default select example">
                <option>SELECT</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            </Card.Subtitle>
            <div className="mt-90">
            <Button className="swap-button" >Swap Now</Button>
            </div>
            
        </Card.Body>
      </Card>
      <div className="faq">
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    </Box>
  );
}

export default SwapCard;
