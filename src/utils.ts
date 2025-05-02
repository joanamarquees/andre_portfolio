// Scroll effect for the header buttons
export const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string, scrollBlock='start' as ScrollLogicalPosition) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: scrollBlock
    });
  }
};