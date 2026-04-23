const backgrounds: Record<string, string> = {
  '/': '/images/heroes/hero1.jpg',
  '/contacts': '/images/heroes/hero2.jpg',
  '/conditions': '/images/heroes/hero3.jpg',
  '/calendar': '/images/heroes/hero1.jpg',
};

export function getRandomBackground(pathname: string): string {
  return backgrounds[pathname] || '/images/heroes/hero1.jpg';
}