'use client'

import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

type Props = {
  spec: Record<string, any>,
};

const Swagger = ({ spec }: Props) => <SwaggerUI spec={spec} />;

export default Swagger;
