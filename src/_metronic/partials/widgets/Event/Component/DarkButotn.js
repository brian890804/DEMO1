import React from 'react'
import { Button } from 'react-bootstrap';
const root = process.env.PUBLIC_URL + "/";
export default function DarkButton({ children, type, onClick, style }) {
  return (
    <Button
      type={type ?? "button"}
      variant="outline-light"
      className="mt-3"
      onClick={onClick}
      style={{
        width: "130px",
        height: 50,
        borderWidth: 0,
        backgroundPosition: 'center',
        fontWeight: '600',
        borderRadius: 1,
        backgroundSize: 'cover',
        backgroundImage: 'url("' + root + 'images/button/button3.png")',
        ...style
      }}>

      {children}
    </Button >
  )
}