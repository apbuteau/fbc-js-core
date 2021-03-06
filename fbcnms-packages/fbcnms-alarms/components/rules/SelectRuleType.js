/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import {makeStyles} from '@material-ui/styles';
import type {RuleInterfaceMap} from './RuleInterface';

const useRuleTypeStyles = makeStyles(theme => ({
  buttonGroup: {
    paddingTop: theme.spacing(1),
  },
  button: {
    textTransform: 'capitalize',
  },
  label: {
    fontSize: theme.typography.pxToRem(14),
  },
}));
export default function SelectRuleType<TRuleUnion>({
  ruleMap,
  value,
  onChange,
}: {
  ruleMap: RuleInterfaceMap<TRuleUnion>,
  onChange: string => void,
  value: string,
}) {
  const classes = useRuleTypeStyles();
  const ruleTypes = React.useMemo<Array<{type: string, friendlyName: string}>>(
    () =>
      Object.keys(ruleMap || {}).map(key => ({
        type: key,
        friendlyName: ruleMap[key].friendlyName || key,
      })),
    [ruleMap],
  );

  // if there's < 2 rule types, just stick with the default rule type
  if (ruleTypes.length < 2) {
    return null;
  }

  /**
   * Grid structure is chosen here to match the selected editor's width
   * and padding.
   */
  return (
    <Grid item>
      <InputLabel className={classes.label}>Rule Type</InputLabel>
      <ToggleButtonGroup
        className={classes.buttonGroup}
        size="medium"
        color="primary"
        variant="outlined"
        value={value}
        onChange={onChange}>
        {ruleTypes.map(ruleType => (
          <ToggleButton
            className={classes.button}
            key={ruleType.type}
            value={ruleType.type}>
            {ruleType.friendlyName}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Grid>
  );
}
