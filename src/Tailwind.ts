// src/Tailwind.ts

import { create } from 'tailwind-rn';
import styles from '../styles.json';

const { tailwind, getColor } = create(styles);

export const tw = tailwind
export const twColor = getColor