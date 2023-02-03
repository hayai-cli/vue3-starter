/*
 * @Author: sroxck
 * @Date: 2023-02-02 15:29:16
 * @LastEditors: sroxck
 * @LastEditTime: 2023-02-02 16:20:39
 * @Description:
 */
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4173",
    experimentalStudio: true,
  },
});
