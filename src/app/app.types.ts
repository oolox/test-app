export type screenName = 'TIMELINE' | 'SKILLS' | 'EMAIL' | 'RESUME';

export interface jobItemType {
  company: string;
  jobTitle: string;
  start: string;
  end: string;
  location?: string;
  selected?: boolean;
  screenshots?: screenshotType[];
  details?: string[];
}

export interface screenshotType {
  fileName: string;
  description: string;
}

export interface menuItem {
  label: string;
  action: screenName;
  selected?: boolean;
}

export const apiToken='mlsn.29fa54f3ae13793fbee2fb7c4680bb3cb8d9b2bc56069712347bb525e8380178';


/*
curl -X POST \
https://api.mailersend.com/v1/email \
-H 'Content-Type: application/json' \
-H 'X-Requested-With: XMLHttpRequest' \
-H 'Authorization: Bearer mlsn.29fa54f3ae13793fbee2fb7c4680bb3cb8d9b2bc56069712347bb525e8380178' \
-d '{
    "from": {
        "email": "oolotronic@gmail.com"
    },
    "to": [
        {
            "email": "oolotronic@hotmail.com"
        }
    ],
    "subject": "Hello from MailerSend!",
    "text": "Greetings from the team, you got this message through MailerSend.",
    "html": "Greetings from the team, you got this message through MailerSend."
}'
 */
