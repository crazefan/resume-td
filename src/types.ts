export interface Job {
  start: number;
  end: string;
  position: string;
  name: string;
  info: string;
}

export interface JobProps {
  job: Job;
}

export interface SpinnerProps {
  spinnerColor: string;
}

export type ErrorProps = {
  message: string;
};
