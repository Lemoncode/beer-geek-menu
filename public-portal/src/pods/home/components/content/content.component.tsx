import { clsx } from 'clsx';
import styles from './content.styles.module.scss';
import { ContentDividerSvg } from './content-divider.component';

export const ContentComponent: React.FC = () => {
  return (
    <>
      <ContentDividerSvg />

      <section className={styles.content}>
        <h3 className={clsx('txt-title', 'txt--accent')}>¿Cómo funciona?</h3>
        <hr className={styles.content_divider} />
        <p className={clsx(styles.content_text, 'txt--contrast')}>
          Selecciona en la app las cervezas disponibles en tu local, después configura los detalles.
        </p>
        <p className={clsx(styles.content_text, 'txt--contrast')}>
          Tus clientes elegirán fácilmente: <br /> escaneando el QR podrán acceder a fotos y detalles de cada cerveza.
        </p>
        <div className={styles.content_buttons}>
          <button className="btn-accent">VER DEMO</button>
          <button className="btn-light">SABER MÁS</button>
        </div>
      </section>
    </>
  );
};
