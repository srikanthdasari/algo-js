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


let activeSubscriptions = 0;

const onNewMessageSubscription = `
  subscription OnNewMessage {
    newMessage {
      id
      content
    }
  }
`;

function subscribeToNewMessages() {
  activeSubscriptions++;

  const unsubscribe = wsClient.subscribe(
    { query: onNewMessageSubscription },
    {
      next: data => {
        console.log("Received data:", data);
      },
      error: err => {
        console.error("Error from subscription:", err);
      },
      complete: () => {
        console.log("Subscription completed");
        activeSubscriptions--;

        if (activeSubscriptions === 0) {
          wsClient.dispose();
        }
      },
    }
  );

  return unsubscribe;
}

const unsubscribeFromNewMessages = subscribeToNewMessages();

// Later, when you want to unsubscribe:
unsubscribeFromNewMessages();

