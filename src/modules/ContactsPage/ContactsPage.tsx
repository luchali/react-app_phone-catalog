import React from 'react';
import styles from './ContactsPage.module.scss';

export const ContactsPage: React.FC = () => {
  return (
    <main className={styles.contacts}>
      <h1 className={styles.contacts__title}>Contacts</h1>

      <div className={styles.contacts__content}>
        <p>
          Email: <a href="mailto:example@gmail.com">example@gmail.com</a>
        </p>
        <p>
          Telephone number: <a href="tel:+1234567890">+1 234 567 890</a>
        </p>

        <p>
          GitHub:{' '}
          <a
            href="https://github.com/luchali/react-app_phone-catalog"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </main>
  );
};
