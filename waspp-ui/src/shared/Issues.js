const ISSUE_1="MA does not show as bonus eligible (YES) on DSM Bonus report.";
const SOLUTION_1="Update bonus flag in WASPP, send flights to IC.";

const ISSUE_2="Commission Proof is blank";
const SOLUTION_2="AS400 commission report did not run - Enter a ticket asap. The commissions may not have run during the weekend process, or the commission reports didn't get generated.";

const ISSUE_3="Showing an MA with all 000000";
const SOLUTION_3="This is an issue with the MA's Active Directory account. Enter a ticket to HR-Incentive Pay";

const ISSUE_4="MA is not in WASPP.";
const SOLUTION_4="Update bonus flag in WASPP, send flights to IC.";

const ISSUE_5="MA does not show as bonus eligible (YES) on DSM Bonus report.";
const SOLUTION_5="Be sure they are on the Opco's BASIC commission schedule (this name varies.), and not on ZERO or TRAIN AND that the MA has been promoted to a commissioned MA (EE group 5) in the SAP portal.";

const ISSUE_6="MA is not in correct flight in 1947 report.";
const SOLUTION_6="Update bonus flight in WASPP and send flights to IC.";

const ISSUE_7="MAs that have left the Opco are still showing on the IC bonus reports.";
const SOLUTION_7="The MAs that have left are still in the SUS Entity chart and need to be removed …. AND/OR noone has sent updated flights to IC from WASPP";

const ISSUE_8="WASPP error 1705 - File access denied (shows the name of an Excel proof)";
const SOLUTION_8="The last proof that was run is still open or still active in memory. Close the open spreadsheet and open Task Manager and End any EXCEL processes.";

const ISSUE_9="WASPP error 1429 - OLE Idispatch exception code from Microsoft Excel: Unable to set the LeftHeader property of the PageSetup Class.";
const SOLUTION_9="Either the PC or VPC's print spooler is not running or there is not a default printer setup.";

const ISSUE_10="MA is showing correct AS400 ID but the 8 digit employee number is incorrect.";
const SOLUTION_10="This is a WASPP database issue. The MA has been entered twice with two different employee numbers. This can only be corrected by using Visual FoxPro and finding the rogue records and removing them.";

const ISSUE_11="SBS payroll did not receive this week file.";
const SOLUTION_11="Open Outlook and verify that the files are setting in either the Drafts or Outbox folders. Outlook should aways be open when using WASPP and the VPC left open after clicking the Send CASI button has been clicked. Sending of the payroll files can take a few mins depending on the Opco's network traffic.";

const ISSUE_12="After updating bases in WASPP, one or more of the bases are incorrect.";
const SOLUTION_12="This is due to the base amounts either being incorret in the SAP portal or the changes have been made but after the Thursday 4pm deal line. Amounts need to be corrected in the SAP portal…these changes will take 24 to 48 hours to show in WASPP.";

export const Issues = [
    {
        Issue: ISSUE_1,
        Solution: SOLUTION_1
    },
    {
        Issue: ISSUE_2,
        Solution: SOLUTION_2
    },
    {
        Issue: ISSUE_3,
        Solution: SOLUTION_3
    },
    {
        Issue: ISSUE_4,
        Solution: SOLUTION_4
    },
    {
        Issue: ISSUE_5,
        Solution: SOLUTION_5
    },
    {
        Issue: ISSUE_6,
        Solution: SOLUTION_6
    },
    {
        Issue: ISSUE_7,
        Solution: SOLUTION_7
    },
    {
        Issue: ISSUE_8,
        Solution: SOLUTION_8
    },
    {
        Issue: ISSUE_9,
        Solution: SOLUTION_9
    },
    {
        Issue: ISSUE_10,
        Solution: SOLUTION_10
    },
    {
        Issue: ISSUE_11,
        Solution: SOLUTION_11
    },
    {
        Issue: ISSUE_12,
        Solution: SOLUTION_12
    }
]