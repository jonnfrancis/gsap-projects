import { footerLinks } from "../constants"

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>More ways to shop: Find an Apple store or other retailer near you. Or call 010010001</p>
        <img src="/logo.svg" alt="Apple Logo" />
      </div>

      <hr />

      <div className="links">
        <p>Copyright © 2026 Apple Inc. All rights reserved.</p>

        <ul>
          {footerLinks.map((link) => (
            <li key={link.id}>
              <a href={link.link}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer