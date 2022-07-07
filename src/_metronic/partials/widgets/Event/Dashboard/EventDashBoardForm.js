import CustomerTable from "./Components/CustomerTable/CustomerTable";

export default function EventDashBoardForm({ Api, EventActivityData }) {
  return (
      <CustomerTable Api={Api} EventActivityData={EventActivityData} />
  )
}