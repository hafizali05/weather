import _ from "lodash";
import React, { Component } from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";

function average(data) {
  return _.round(_.sum(data) / data.length);
}

export default prop => {
  return (
    <div>
      <div>
        <Sparklines data={prop.data} height={120} width={180}>
          <SparklinesLine color={prop.color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
      </div>
      <div>{average(prop.data)}</div>
    </div>
  );
};
