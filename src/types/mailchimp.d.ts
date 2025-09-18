declare module '@mailchimp/mailchimp_marketing' {
  export interface MailchimpConfig {
    apiKey: string;
    server: string;
  }

  export interface AddListMemberRequest {
    email_address: string;
    status: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending';
  }

  export interface AddListMemberResponse {
    id: string;
    email_address: string;
    status: string;
  }

  export function setConfig(config: MailchimpConfig): void;
  export const lists: {
    addListMember: (listId: string, memberData: AddListMemberRequest) => Promise<AddListMemberResponse>;
  };
}
