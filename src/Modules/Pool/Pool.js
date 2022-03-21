import React from "react";
import { Box } from "@mui/material";
import Tabs from "react-bootstrap/Tabs";

import { Tab } from "react-bootstrap";
import Faq from "react-faq-component";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import "./Pool.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const rows = [
    {
        "id": 1,
        "Pool":"/images/Tether.png",
        "PoolTo":"/images/XDC.svg",
       "Composition":"XDC",
       "CompositionTo":"USDC",
       "PoolValue":"$442,298",
       "Volume":"$89,745",
       "TokensTo":"42,120",
       "APR":"0.5%",

    },
    {
        "id": 2,
        "Pool":"/images/Tether.png",
        "PoolTo":"/images/XDC.svg",
        "Composition":"XDC",
        "CompositionTo":"USDC",
        "PoolValue":"$442,298",
        "Volume":"$89,745",
        "TokensTo":"42,120",
        "APR":"0.5%",
    },
    {
        "id": 3,
        "Pool":"/images/Tether.png",
        "PoolTo":"/images/XDC.svg",
        "Composition":"XDC",
        "CompositionTo":"USDC",
        "PoolValue":"$442,298",
        "Volume":"$89,745",
        "TokensTo":"42,120",
        "APR":"0.5%",
    }
 ]

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

function PoolCard() {
  const classes = useStyles();
  return (
    <Box className="pool-box">
      <div className="investment-div">
        <p>Investment Pool</p>
      </div>

      <Tabs
        defaultActiveKey="Top Tokens"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Top Tokens" title="Top Tokens">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">#</TableCell>
                  <TableCell>Pool</TableCell>
                  <TableCell>Composition</TableCell>
                  <TableCell>Pool Value</TableCell>
                  <TableCell>Volume&nbsp;(24h)</TableCell>
                  <TableCell>APR</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                   {rows.map((row) => (
                      
           <TableRow component={Link} to="/pool-detail" key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell><img src={row.Pool} /><img src={row.PoolTo} /></TableCell>
                    <TableCell>{row.Composition}&nbsp;{row.CompositionTo}</TableCell>
                    <TableCell>{row.PoolValue}</TableCell>
                    <TableCell>{row.Volume}</TableCell>
                    <TableCell>{row.APR}</TableCell>
                  </TableRow>
                 
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Tab>
        <Tab eventKey="Your Liquidity" title="Your Liquidity">
          <p>Investment Pool</p>
        </Tab>
      </Tabs>

 
      <div className="searchbar">
        <button className="searchicon">
          {" "}
          <SearchIcon />
        </button>

        <input type="text" placeholder="Filter by Token" name="search" />
      </div>
      <div className="new-pair">
        <button className="new-button">
          +&nbsp;New Pair
         
        </button>


      </div>
      <div className="faq">
        <Faq data={data} styles={styles} config={config} />
      </div>
    </Box>
  );
}

export default PoolCard;
