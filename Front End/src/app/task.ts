export class Task {

  id: string;
  name: string;
  assignee?: null;
  created: string;
  due?: null;
  followUp?: null;
  delegationState?: null;
  description?: null;
  executionId: string;
  owner?: null;
  parentTaskId?: null;
  priority: number;
  processDefinitionId: string;
  processInstanceId: string;
  taskDefinitionKey: string;
  caseExecutionId?: null;
  caseInstanceId?: null;
  caseDefinitionId?: null;
  suspended: boolean;
  formKey?: null;
  tenantId?: null;   
}