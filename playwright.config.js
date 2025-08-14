// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  //setting the timeout 
  timeout:40*1000,
  //setting expect timeout
  expect:{
    timeout:40*1000
  },

  // projects: [
  //   {
  //     name: 'Desktop Chrome',
  //     use: { ...devices['Desktop Chrome'] },
  //   },
  //   {
  //     name: 'Desktop Firefox',
  //     use: { ...devices['Desktop Firefox'] },
  //   },
  //   {
  //     name: 'Desktop Safari',
  //     use: { ...devices['Desktop Safari'] },
  //   },
  //   {
  //     name: 'Mobile Chrome',
  //     use: { ...devices['Mobile Chrome'] },
  //   },
  //   {
  //     name: 'Mobile Safari',
  //     use: { ...devices['Mobile Safari'] },
  //   },
  // ],

  use: {
    browserName:'chromium',
    headless: false,
    ignoreHTTPSErrors: true,
    screenshot:'on', //this will capture screenshot on every step execution
    trace: 'retain-on-failure',
    
   
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    
  },

  /* Configure projects for major browsers */
  
});

