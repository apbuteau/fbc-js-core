/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

type Props = {
  className?: string,
};

const EquipmentIcon = (props: Props) => (
  <SvgIcon
    color="inherit"
    viewBox="0 0 18 18"
    width="18px"
    height="18px"
    className={props.className}>
    <g
      transform="translate(1 1)"
      fill="#EDF0F9"
      stroke="#B8C2D3"
      strokeWidth="2">
      <g>
        <circle cx="8" cy="8" r="8" />
      </g>
    </g>
  </SvgIcon>
);

export default EquipmentIcon;
