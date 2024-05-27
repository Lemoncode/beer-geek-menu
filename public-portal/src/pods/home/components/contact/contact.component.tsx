import clsx from 'clsx';
import styles from './contact.styles.module.scss';

export const ContactComponent: React.FC = () => {
  return (
    <section className={styles.contact}>
      <h3 className={clsx('txt-title', 'txt--accent')}>¿La quieres en tu pub / cervecería?</h3>
      <p className="txt--contrast">
        Pruébala gratis por un año.
        <br />
        Sin compromiso.
      </p>
      <div className={styles.contact_box}>
        <p className="txt--primary">Contacto:</p>
        <address>
          <a href="mailto:info@beergeekmenu.com" className="link-info">
            info@beergeekmenu.com
          </a>
        </address>
      </div>
    </section>
  );
};
