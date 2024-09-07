import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  section: string
}

const CustomLink = ({ href, children, section }: CustomLinkProps) => {
  const pathname = usePathname();
  const lang = pathname.split('/')[1];

  return (
    <Link className={`
      ${section==='footer' ? "text-[white]" : "hover:text-primary" }
      ${section==='navSmall' ? " text-[20px]" : "" }
      hover:translate-y-[-2px] transition ease-in-out duration-300`} href={`/${lang}${href}`}>
      {children}
    </Link>
  );
};

export default CustomLink;
