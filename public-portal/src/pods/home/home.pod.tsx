import { HeroComponent } from './components/hero/hero.component.module';
import { ContentComponent } from './components/content/content.component';
import { ContactComponent } from './components/contact/contact.component';
import styles from './home.styles.module.scss';

export const HomePod: React.FC = () => {
  return (
    <div className={styles.home_background}>
      <HeroComponent />
      <main className="bg-contrast-darker">
        <ContentComponent />
        <ContactComponent />
      </main>
    </div>
  );
};
