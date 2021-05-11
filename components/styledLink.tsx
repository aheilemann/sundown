// I worked on this, but skipped it as links shouldn't be actionable anyway.
import Link from 'next/link'
import styled from 'styled-components'

const StyledLink: React.FC<Props> = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)

export default styled(StyledLink)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  transition: all 0.2s ease-in-out;
`

// temp fix, find proper types.
interface Props {
  as: string;
  children?: Array<React.ReactChild> | React.ReactChild
  className: string;
  href: string;
  }