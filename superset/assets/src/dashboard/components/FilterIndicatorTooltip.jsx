/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { t } from '@superset-ui/translation';
import { isEmpty } from 'lodash';

import FilterEditIcon from '../../components/FilterEditIcon';

const propTypes = {
  label: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  clickIconHandler: PropTypes.func,
};

const defaultProps = {
  clickIconHandler: undefined,
};

export default function FilterIndicatorTooltip({
  label,
  values,
  clickIconHandler,
}) {
  const displayValue = isEmpty(values) ? t('Not filtered') : values.join(', ');

  return (
    <div className="tooltip-item">
      <div className="filter-content">
        <label htmlFor={`filter-tooltip-${label}`}>{label}:</label>
        <span> {displayValue}</span>
      </div>

      {clickIconHandler && (
        <FilterEditIcon clickIconHandler={clickIconHandler} />
      )}
    </div>
  );
}

FilterIndicatorTooltip.propTypes = propTypes;
FilterIndicatorTooltip.defaultProps = defaultProps;
