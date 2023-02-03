import { keyframes } from "styled-components";

export const SLIDE_LEFT = {
  forward: keyframes`
        from { 
            transform: translateX(-100%);
        }
        to { 
            transform: translateX(0);
        }
    `,
  backward: keyframes`
        from { 
            transform: translateX(0);
        }
        to { 
            transform: translateX(-100%);
        }
    `,
};

export const SLIDE_RIGHT = {
  forward: keyframes`
        from { 
            transform: translateX(100%);
        }
        to { 
            transform: translateX(0);
        }
    `,
  backward: keyframes`
        from { 
            transform: translateX(0);
        }
        to { 
            transform: translateX(100%);
        }
    `,
};

export const FADE = {
  forward: keyframes`
        from { 
            opacity: 0 
        }
        to {
            opacity: 1 
        }
    `,
  backward: keyframes`
        from { 
            opacity: 1 
        }
        to { 
            opacity: 0 
        }
    `,
};
