import { gql, DocumentNode } from '@apollo/client';

type Field = string | { field: string; subFields: string[] };

interface QueryBuilderOptions {
  operationName: string;
  typeName: string;
  fields: Field[];
  variables?: { [key: string]: string };
}

export const buildQuery = (options: QueryBuilderOptions): DocumentNode => {
  const { operationName, typeName, fields, variables } = options;

  const fieldStrings = fields.map((field) => {
    if (typeof field === 'string') {
      return field;
    } else {
      const { field: parentField, subFields } = field;
      return `${parentField} { ${subFields.join(' ')} }`;
    }
  });

  const variableDefinitions = variables
    ? Object.entries(variables)
        .map(([name, type]) => `$${name}: ${type}`)
        .join(', ')
    : '';

  const variableAssignments = variables
    ? Object.keys(variables)
        .map((name) => `${name}: $${name}`)
        .join(', ')
    : '';

  return gql`
    query ${operationName}(${variableDefinitions}) {
      ${typeName}(${variableAssignments}) {
        ${fieldStrings.join(' ')}
      }
    }
  `;
};
