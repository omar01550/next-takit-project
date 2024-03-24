import React from 'react'

const EgyptImage = ({chose,setChose}) => {

  return (
    <div className={chose == 'egypt'?'cursor-pointer ring-8 ring-secondary-100 rounded-md':'cursor-pointer rounded-md'} onClick={() => {
        setChose("egypt")
    }}>
             <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="200" rx="10" fill="#F1F1F1" fill-opacity="0.7"/>
<g clip-path="url(#clip0_5_4197)">
<g clip-path="url(#clip1_5_4197)">
<g clip-path="url(#clip2_5_4197)">
<path d="M150.022 108C170.18 108 186.52 91.659 186.52 71.5014C186.52 51.3439 170.18 35.0029 150.022 35.0029C129.864 35.0029 113.523 51.3439 113.523 71.5014C113.523 91.659 129.864 108 150.022 108Z" fill="white"/>
<path d="M184.435 59.3306H161.945C162.922 67.3643 162.928 75.4863 161.964 83.5215H184.483C187.214 75.6864 187.197 67.1548 184.435 59.3306Z" fill="#EFECEC"/>
<path d="M161.943 59.3304H184.432C184.428 59.3196 184.424 59.3089 184.42 59.2986C182.083 52.7194 177.909 46.948 172.393 42.6679C166.877 38.3879 160.25 35.7787 153.297 35.1494C158.883 38.2116 160.515 47.9149 161.943 59.3304Z" fill="#C42B27"/>
<path d="M153.297 107.845C160.263 107.214 166.902 104.597 172.424 100.303C177.946 96.0097 182.119 90.2209 184.446 83.6249C184.458 83.5901 184.469 83.5553 184.481 83.5254H161.963C160.549 95.0027 158.907 104.774 153.297 107.845Z" fill="#0B0B0B"/>
<path d="M113.52 71.5006C113.518 75.5949 114.207 79.66 115.556 83.5254H163.839C164.803 75.4902 164.797 67.3682 163.821 59.3345H115.61C114.226 63.2414 113.519 67.3559 113.52 71.5006Z" fill="#EFEFEF"/>
<path d="M115.617 59.2985C115.617 59.3084 115.61 59.3184 115.605 59.3303H163.825C162.396 47.9158 158.884 38.2125 153.303 35.1503C152.217 35.0538 151.124 35 150.017 35C142.476 35.0011 135.12 37.3377 128.96 41.6886C122.801 46.0396 118.139 52.1913 115.617 59.2985Z" fill="#CC3434"/>
<path d="M163.841 83.5254H115.559C115.571 83.5592 115.582 83.5941 115.593 83.6249C118.105 90.7498 122.765 96.92 128.931 101.285C135.097 105.65 142.466 107.995 150.02 107.996C151.125 107.996 152.218 107.941 153.299 107.845C158.906 104.774 162.424 95.0027 163.841 83.5254Z" fill="#151515"/>
<path d="M157.142 79.9903C156.603 79.9281 156.06 79.9104 155.519 79.9375C155.419 79.9962 155.431 80.1694 155.386 80.2839C155.438 80.3914 155.545 80.3327 155.653 80.4163C155.819 80.5756 155.933 80.7916 156.186 80.8693C155.969 81.0973 155.975 81.5462 155.653 81.6657C155.708 82.1893 155.367 82.2809 154.857 82.3835C151.917 82.8683 148.922 82.9306 145.965 82.5686C145.439 82.5271 144.925 82.3922 144.447 82.1704C144.389 82.1117 144.346 82.0394 144.323 81.9602C144.3 81.8809 144.297 81.7972 144.314 81.7165C144.006 81.5632 144.003 81.1052 143.756 80.8912C144.1 80.7747 144.167 80.3805 144.552 80.3058C144.545 80.1782 144.517 80.0524 144.47 79.9335C143.911 79.9071 143.35 79.9247 142.793 79.9863C142.836 79.389 142.85 78.714 142.9 78.0162C142.968 77.0834 142.958 75.9903 143.033 75.0615C143.072 74.5876 143.057 74.0978 143.088 73.6239C143.143 72.728 143.104 71.832 143.167 70.9878C143.236 70.0779 143.204 69.1063 143.274 68.2472C143.344 67.3512 143.59 66.6434 144.631 66.729C145.864 66.8286 146.64 67.8649 147.985 67.8739C148.359 67.4773 148.635 66.9991 148.792 66.477C148.949 65.955 148.983 65.4036 148.889 64.8664C148.809 64.3478 148.26 63.5981 147.719 63.8819C147.639 63.0068 148.472 63.1243 149.023 63.402C149.19 63.2975 149.24 63.1492 149.421 63.1093C149.853 63.051 150.293 63.1352 150.672 63.3493C150.896 63.5342 151.07 63.7728 151.177 64.0427C151.284 64.3126 151.321 64.6052 151.285 64.8933C151.285 65.2656 151.2 65.636 151.23 66.0103C151.265 66.6754 151.496 67.3151 151.896 67.848C153.145 67.9625 154.064 66.8525 155.281 66.729C155.501 66.6945 155.727 66.721 155.933 66.8056C156.14 66.8902 156.319 67.0296 156.452 67.2089C156.69 68.5713 156.806 69.9523 156.798 71.3353C156.865 72.1954 156.825 73.0933 156.877 73.9714C156.997 75.9584 157.056 77.9514 157.142 79.9903ZM151.152 66.067C151.217 65.3468 151.182 64.621 151.046 63.9107C150.927 63.7982 150.859 63.636 150.699 63.5653H150.301C150.102 63.6728 150.028 63.8938 149.821 63.9376C149.33 64.0421 149.29 63.5752 148.916 63.4319C148.817 63.3941 148.688 63.415 148.57 63.3781C148.214 63.2696 148.001 63.1422 147.824 63.6449C148.476 63.6071 149.058 63.8171 149.209 64.3637C148.837 64.2641 148.941 64.5946 148.969 64.8146C149.108 65.7053 148.939 66.6167 148.489 67.398C148.312 67.6847 148.085 67.9097 147.957 68.1705C148.344 68.0988 148.693 68.1207 148.888 67.8719C149.149 67.5473 149.094 66.8515 149.261 66.4612C149.281 67.1477 149.054 67.8186 148.623 68.3527C149.571 68.2193 149.736 67.4279 149.817 66.4612C149.869 66.9161 149.795 67.3764 149.603 67.7922C149.726 67.9455 149.795 68.1516 149.977 68.2462C150.127 68.115 150.245 67.9508 150.322 67.7663C150.125 67.3611 150.069 66.9019 150.163 66.4612C150.151 67.4856 150.431 68.2173 151.309 68.3527C150.87 67.815 150.659 67.1266 150.722 66.4354C150.751 66.94 150.867 67.4357 151.068 67.8997C151.35 68.0683 151.672 68.1602 152 68.1665C151.505 67.5725 151.209 66.8383 151.152 66.067ZM149.476 63.6449V63.7514C149.54 63.7415 149.534 63.8012 149.608 63.7783C149.622 63.7594 149.631 63.7379 149.636 63.715C149.641 63.6922 149.64 63.6686 149.635 63.6459C149.613 63.6277 149.585 63.6175 149.556 63.6168C149.527 63.616 149.499 63.6249 149.476 63.6419V63.6449ZM144.337 66.8126C144.204 66.8267 144.075 66.8668 143.958 66.9306C143.84 66.9944 143.737 67.0808 143.653 67.1847C143.569 67.2886 143.506 67.408 143.468 67.5362C143.43 67.6643 143.418 67.7987 143.432 67.9316C143.69 67.843 143.935 67.6021 144.205 67.612C144.06 71.618 143.885 75.2626 143.725 79.2197C143.46 79.4044 143.225 79.6287 143.028 79.8847H144.465C144.541 79.2496 145.255 79.1192 145.85 79.2984C146.133 78.3218 146.42 77.3492 146.676 76.3437C146.412 76.506 146.278 76.7966 146.01 76.9559C146.11 74.3945 146.235 71.9007 146.33 69.2905C146.854 69.5906 147.474 69.6766 148.06 69.5304C148.759 69.3799 149.42 69.0901 150.003 68.6782C150.693 69.2138 151.528 69.5291 152.4 69.5832C152.82 69.5931 153.238 69.5112 153.624 69.3432C153.68 71.9535 153.866 74.506 153.917 76.9838C153.716 76.767 153.503 76.5622 153.279 76.3706C153.514 77.378 153.82 78.3148 154.075 79.2994C154.695 79.1003 155.38 79.2735 155.487 79.8857C155.956 79.8678 156.497 79.9206 156.923 79.8588C156.756 79.5602 156.342 79.4766 156.232 79.162C156.16 78.7219 156.142 78.2745 156.18 77.83C156.033 74.6105 155.828 70.8086 155.754 67.5822C156.017 67.6838 156.275 67.7991 156.526 67.9276C156.466 67.2865 156.2 66.8495 155.594 66.8087C154.216 66.7161 153.422 67.9834 152.027 67.9535C152.027 68.1227 152.299 68.1606 152.267 68.2731C151.953 68.2653 151.64 68.2209 151.335 68.1407C151.31 68.288 151.577 68.3557 151.601 68.5389C151.133 68.4645 150.697 68.2516 150.351 67.9276C150.241 68.1129 150.107 68.2829 149.953 68.4333C149.838 68.2517 149.704 68.0822 149.554 67.9276C149.4 68.1023 149.213 68.2442 149.002 68.3448C148.792 68.4454 148.564 68.5026 148.331 68.513C148.409 68.3786 148.57 68.3258 148.597 68.1407C148.296 68.2371 147.98 68.2736 147.665 68.2482C147.748 68.1486 147.888 68.1158 147.905 67.9495C146.583 67.9943 145.661 66.7101 144.333 66.8116L144.337 66.8126ZM146.919 69.6887C146.972 72.6075 148.085 74.6981 150.005 75.838C150.995 75.1601 151.793 74.2374 152.32 73.1598C152.847 72.0821 153.086 70.8862 153.014 69.6887C152.267 69.7059 151.524 69.5704 150.832 69.2905C150.504 69.1501 150.189 68.8923 149.927 68.8106C149.054 69.4362 147.994 69.7459 146.921 69.6887H146.919ZM146.972 71.6319C146.947 72.9261 146.74 74.504 146.84 75.838C147.043 74.9935 147.124 74.1241 147.08 73.2566C147.194 72.6905 147.166 72.1051 146.999 71.5523C146.999 71.5808 146.99 71.6085 146.972 71.6309V71.6319ZM152.882 74.0281C152.835 74.6521 152.926 75.279 153.148 75.8638C153.175 74.4482 152.997 72.9769 152.99 71.5772C152.955 71.5772 152.953 71.5443 152.909 71.5513C152.807 72.3729 152.798 73.2035 152.883 74.0271L152.882 74.0281ZM147.398 75.5453C147.627 75.2865 147.884 75.0545 148.095 74.7718C148.104 74.2765 147.933 73.7947 147.615 73.4149C147.529 74.0948 146.871 74.9808 147.399 75.5453H147.398ZM151.87 74.7987C152.12 75.0296 152.334 75.4348 152.615 75.5453C153.013 74.8982 152.438 74.2033 152.376 73.4677C152.341 73.4677 152.338 73.4328 152.294 73.4418C152.001 73.8318 151.852 74.3111 151.871 74.7987H151.87ZM148.303 75.9933C148.545 75.7259 148.768 75.441 148.968 75.1411C148.638 74.8773 148.397 74.5249 148.09 74.2352C148.16 74.8275 148.199 75.4447 148.304 75.9973L148.303 75.9933ZM150.991 75.167C151.189 75.4694 151.423 75.7468 151.688 75.9933C151.743 75.4169 151.787 74.8315 151.873 74.2889C151.873 74.2561 151.865 74.2262 151.82 74.2342C151.566 74.565 151.29 74.878 150.993 75.171L150.991 75.167ZM147.317 75.6996C147.284 75.5284 147.194 75.4149 147.157 75.2486C146.968 75.6151 146.842 76.0109 146.785 76.4193C146.742 76.5677 146.64 76.6901 146.653 76.8454C146.957 76.715 147.083 76.4054 147.398 76.286C147.474 76.5231 147.562 76.7557 147.664 76.9828C147.911 76.8643 147.899 76.49 148.118 76.3437C148.238 76.7728 148.365 77.1968 148.516 77.595C148.8 77.3551 149.123 77.153 149.213 76.716C149.054 76.3526 148.907 75.9754 148.761 75.5991C148.545 75.7464 148.408 76.1157 148.228 76.2113C148.234 75.778 148.171 75.3466 148.041 74.933C147.829 75.2151 147.587 75.4734 147.32 75.7036L147.317 75.6996ZM151.736 76.2322C151.542 76.0331 151.408 75.7792 151.203 75.5941C151.126 75.7683 151.037 75.9405 150.963 76.1267C150.866 76.3112 150.794 76.5082 150.75 76.712C150.73 77.1301 151.19 77.3253 151.447 77.5911C151.526 77.1649 151.642 76.7463 151.792 76.3397C151.958 76.5478 152.032 76.8464 152.272 76.9788C152.395 76.7558 152.48 76.495 152.592 76.2601C152.811 76.4702 153.044 76.6661 153.289 76.8464C153.178 76.2918 153.018 75.7483 152.809 75.2227C152.758 75.3907 152.687 75.5515 152.596 75.7016C152.375 75.4363 152.134 75.1874 151.877 74.9569C151.798 75.3792 151.752 75.8068 151.738 76.2362L151.736 76.2322ZM149.02 75.2218C148.589 75.5294 149.068 76.1525 149.234 76.501C149.31 76.1934 149.379 75.8818 149.447 75.5682C149.303 75.4607 149.162 75.3432 149.022 75.2247L149.02 75.2218ZM150.513 75.5941C150.548 75.9062 150.629 76.2115 150.753 76.5C150.901 76.1854 151.012 75.835 151.151 75.5144C151.076 75.4039 151.028 75.2656 150.885 75.2218C150.822 75.4079 150.588 75.4228 150.513 75.5971V75.5941ZM147.292 76.3905C147.094 76.6237 146.858 76.822 146.595 76.9768C146.41 77.5134 146.794 77.9724 146.967 78.3875C147.209 78.2113 147.313 77.8977 147.554 77.7225C147.624 78.0358 147.731 78.3396 147.873 78.6274C148.134 78.4442 148.284 78.0112 148.537 77.9096C148.549 78.1969 148.622 78.4783 148.751 78.7349C148.846 78.2262 148.967 77.7394 149.07 77.2416C148.855 77.2854 148.698 77.614 148.484 77.7484C148.337 77.3631 148.241 76.9281 148.086 76.5537C147.877 76.7001 147.847 77.0266 147.66 77.1929C147.586 76.9073 147.462 76.6373 147.293 76.3955L147.292 76.3905ZM152.243 77.1869C152.091 76.9659 152.001 76.6891 151.764 76.5478C151.664 76.946 151.558 77.3372 151.472 77.7424C151.25 77.615 151.102 77.2785 150.885 77.2357C150.952 77.7538 151.077 78.2628 151.258 78.7528C151.293 78.455 151.356 78.1611 151.445 77.8748C151.685 78.1058 151.809 78.4502 152.11 78.6194C152.194 78.3029 152.309 78.0221 152.403 77.7145C152.628 77.9067 152.734 78.2123 152.989 78.3795C153.136 77.9514 153.511 77.5532 153.36 76.9967C153.084 76.8205 152.878 76.5746 152.615 76.3835C152.46 76.6304 152.405 76.9639 152.243 77.1949V77.1869ZM149.342 79.2894C149.205 79.3661 149.109 79.4835 148.969 79.5562C148.912 79.4895 148.748 79.2725 148.703 79.3691C148.659 79.4656 148.662 79.612 148.624 79.7155C148.878 79.7394 149.38 79.6408 149.502 79.8748C149.862 79.825 150.153 79.9425 150.434 79.8748C150.538 79.8489 150.621 79.7354 150.726 79.7155C150.925 79.6767 151.116 79.7503 151.313 79.7155C151.276 79.6 151.305 79.4168 151.231 79.3432C151.057 79.3362 151.087 79.5343 150.912 79.5283C150.822 79.4069 150.657 79.3571 150.566 79.2357C150.466 78.495 150.401 77.7145 150.247 77.0256C150.187 77.7613 150.356 78.496 150.326 79.2884C150.184 79.4109 150.115 79.609 149.954 79.7145C149.893 79.5363 149.655 79.4457 149.607 79.2088C149.492 78.5577 149.849 77.5493 149.689 77.0256C149.539 77.7543 149.51 78.5916 149.342 79.2974V79.2894ZM145.934 79.3163C146.067 79.4056 146.228 79.4431 146.387 79.4218C146.535 79.1936 146.704 78.9799 146.892 78.7837C146.98 79.0661 147.087 79.3419 147.213 79.609H147.398C147.543 79.4348 147.622 79.1948 147.771 79.0236C147.864 79.2317 147.909 79.4885 148.009 79.6886C148.168 79.7188 148.329 79.7278 148.489 79.7155C148.599 79.4535 148.653 79.1718 148.648 78.888C148.644 78.6042 148.581 78.3243 148.463 78.0659C148.219 78.283 148.075 78.5995 147.824 78.8116C147.765 78.4914 147.647 78.1848 147.478 77.9066C147.293 78.1177 147.125 78.3506 146.946 78.5716C146.757 78.2372 146.704 77.7663 146.44 77.5065C146.297 78.1426 146.116 78.7339 145.935 79.3243L145.934 79.3163ZM152.989 78.5707C152.835 78.3235 152.647 78.0996 152.43 77.9057C152.273 78.1655 152.249 78.5597 152.083 78.8106C151.878 78.5796 151.694 78.1904 151.445 78.0918C151.341 78.3507 151.291 78.6276 151.295 78.9064C151.3 79.1851 151.36 79.4602 151.472 79.7155C151.623 79.728 151.776 79.7189 151.925 79.6886C152.047 79.5015 152.068 79.2118 152.191 79.0236C152.303 79.2227 152.424 79.4109 152.536 79.609H152.749C152.849 79.3188 152.965 79.0344 153.096 78.7568C153.238 79.007 153.408 79.2407 153.601 79.4537C153.75 79.4158 153.938 79.4168 153.999 79.2944C153.819 78.72 153.669 78.1167 153.494 77.5383H153.414C153.293 77.9027 153.141 78.2421 152.994 78.5746L152.989 78.5707ZM146.466 79.4756C146.677 79.5237 146.891 79.5592 147.106 79.5821C147.06 79.3491 146.96 79.1304 146.813 78.944C146.722 79.154 146.535 79.2606 146.467 79.4845L146.466 79.4756ZM152.856 79.5811C153.062 79.5584 153.266 79.5228 153.468 79.4746C153.448 79.3143 153.24 79.1192 153.122 78.9689C152.955 79.1033 152.92 79.3631 152.856 79.5901V79.5811ZM147.505 79.6349C147.592 79.6886 147.776 79.6488 147.903 79.6617C147.852 79.5074 147.861 79.2944 147.718 79.2357C147.624 79.3584 147.552 79.4965 147.505 79.6438V79.6349ZM152.057 79.6617H152.43C152.427 79.5734 152.401 79.4874 152.354 79.4125C152.307 79.3377 152.241 79.2766 152.163 79.2357C152.157 79.4029 152.019 79.5532 152.058 79.6697L152.057 79.6617ZM154.64 79.2874C153.912 79.4801 153.174 79.6316 152.43 79.7414C151.864 79.8028 151.294 79.8205 150.725 79.7941C150.569 79.9634 150.65 80.1565 150.752 80.3267C151.31 80.394 151.874 80.385 152.43 80.2999C152.4 79.7354 153.071 79.595 153.147 80.1933C153.722 80.1203 154.285 79.9772 154.825 79.7673C154.831 79.5522 154.83 79.3302 154.641 79.2974L154.64 79.2874ZM147.026 79.6856C146.569 79.6209 145.954 79.4039 145.533 79.3133C145.295 79.2615 145.224 79.3044 145.134 79.4198V79.7931C145.679 79.9807 146.241 80.1141 146.812 80.1913C146.862 79.594 147.537 79.7026 147.503 80.2979C148.058 80.3824 148.623 80.3915 149.181 80.3247C149.3 80.1376 149.38 80.0002 149.234 79.7921C148.497 79.827 147.758 79.7953 147.027 79.6976L147.026 79.6856ZM144.604 80.0052C144.771 79.9615 144.926 79.8793 145.056 79.7653C145.044 79.6359 145.083 79.4537 145.029 79.3671C144.955 79.3744 144.883 79.3983 144.82 79.4369C144.756 79.4755 144.702 79.5279 144.662 79.5901C144.621 79.6524 144.595 79.723 144.585 79.7967C144.575 79.8704 144.582 79.9454 144.605 80.0161L144.604 80.0052ZM154.905 79.7921C155.04 79.8927 155.194 79.9652 155.357 80.0052C155.375 79.9351 155.377 79.8622 155.365 79.791C155.353 79.7198 155.326 79.652 155.286 79.5919C155.246 79.5317 155.194 79.4806 155.133 79.4417C155.072 79.4028 155.004 79.3771 154.932 79.3661C154.878 79.4706 154.918 79.6697 154.906 79.8041L154.905 79.7921ZM147.158 80.5099C147.223 80.4485 147.294 80.395 147.371 80.3506C147.389 80.268 147.388 80.1826 147.37 80.1001C147.352 80.0177 147.316 79.9402 147.265 79.8728C146.798 79.819 146.816 80.4661 147.159 80.5219L147.158 80.5099ZM152.563 80.3238C152.601 80.4163 152.723 80.4362 152.829 80.5089C152.937 80.4492 152.989 80.3317 153.069 80.2431C153.056 79.6697 152.386 79.9116 152.563 80.3367V80.3238ZM146.759 80.271C146.05 80.2471 145.337 79.7503 144.709 80.0579C144.689 80.1874 144.594 80.2421 144.63 80.4293C144.331 80.3974 143.984 80.7976 143.965 80.936C143.923 81.2346 144.225 81.4576 144.39 81.6548C144.368 81.8012 144.396 81.9507 144.47 82.0789C146.724 82.8255 150.443 82.8404 153.231 82.5328C154.048 82.4422 155.35 82.3586 155.574 81.8937V81.5741C155.873 81.4965 155.917 81.1759 155.999 80.8773C155.764 80.723 155.683 80.4134 155.303 80.3984C155.377 80.2909 155.251 80.1933 155.25 80.0789C154.918 79.7961 154.521 80.0032 154.055 80.1047C153.41 80.2451 152.988 80.2461 152.83 80.718C152.763 80.5537 152.605 80.482 152.484 80.3715C151.921 80.4684 151.347 80.4775 150.781 80.3984C150.643 80.6144 150.338 80.6652 150.301 80.9838C150.186 80.7901 150.121 80.5701 150.114 80.3447H149.848C149.828 80.5716 149.755 80.7906 149.634 80.9838C149.613 80.6592 149.297 80.6304 149.183 80.3984C148.617 80.4639 148.044 80.4639 147.478 80.3984C147.296 80.4552 147.218 80.6154 147.08 80.718C147.059 80.5 146.867 80.4343 146.76 80.2829L146.759 80.271ZM149.661 79.9504C149.705 80.0669 149.769 80.1752 149.848 80.271C150.173 80.3377 150.202 80.1107 150.301 79.9504C150.089 79.9115 149.872 79.9159 149.662 79.9634L149.661 79.9504ZM149.288 80.4044C149.394 80.5334 149.531 80.6339 149.686 80.6971C149.785 80.4213 149.718 80.0122 149.419 79.9783C149.445 80.2003 149.266 80.2063 149.289 80.4163L149.288 80.4044ZM150.433 79.9783C150.267 80.0978 150.059 80.5398 150.325 80.6971C150.425 80.5667 150.608 80.5179 150.671 80.3506C150.562 80.267 150.587 80.04 150.434 79.9903L150.433 79.9783Z" fill="#EEBC31"/>
<path d="M144.792 78.1268C144.51 78.4065 144.207 78.6644 143.887 78.8983C144.013 75.2647 144.244 71.5315 144.367 67.7715C144.674 67.962 144.952 68.1968 145.192 68.4683C145.076 71.7147 144.925 74.6943 144.792 78.1268Z" fill="#EEBC31"/>
<path d="M156.078 78.8724C155.926 78.9023 155.78 78.6524 155.626 78.526C155.446 78.4075 155.285 78.2644 155.146 78.1009C154.978 75.3593 155.018 72.4653 154.799 69.8491C154.737 69.3993 154.72 68.9445 154.747 68.4912C154.83 68.1667 155.381 68.0432 155.543 67.7476C155.752 71.0845 155.888 75.2746 156.078 78.8724Z" fill="#EEBC31"/>
<path d="M145.428 68.6504C145.663 68.8102 145.885 68.9882 146.093 69.183C146.029 71.3223 145.893 73.8848 145.8 76.0232C145.837 76.3879 145.828 76.7558 145.773 77.1182C145.66 77.4278 145.226 77.5941 145.027 77.8639C145.144 74.7598 145.325 71.6847 145.428 68.6504Z" fill="#EEBC31"/>
<path d="M154.905 77.8071C154.87 77.844 154.796 77.7504 154.745 77.6996C154.588 77.5443 154.368 77.3014 154.213 77.1411C154.078 74.5369 153.975 71.8201 153.867 69.2348C154.043 69.0194 154.249 68.8309 154.479 68.6753C154.634 71.4767 154.77 74.8037 154.905 77.8071Z" fill="#EEBC31"/>
<path d="M152.775 69.8209C152.828 70.948 152.6 72.0705 152.112 73.0879C151.624 74.1053 150.892 74.9858 149.98 75.6506C148.256 74.465 147.247 72.5645 147.078 69.8209C148.107 69.8507 149.121 69.5625 149.98 68.9956C150.798 69.5669 151.779 69.8566 152.775 69.8209ZM149.022 69.6337C148.975 70.7238 148.996 72.1912 148.996 73.3878C148.951 73.8127 148.951 74.2412 148.996 74.666C149.044 74.8373 149.308 74.9956 149.449 75.118C149.603 75.2683 149.773 75.4017 149.955 75.5162C150.215 75.3171 150.851 75.0005 150.941 74.6641C150.984 74.2484 150.984 73.8294 150.941 73.4137V69.6307C150.595 69.4605 150.27 69.2714 149.928 69.0982C149.683 69.3381 149.285 69.4167 149.022 69.6337Z" fill="#EEBC31"/>
<path d="M145.348 79.4575C145.514 79.5133 145.778 79.4705 145.801 79.6716C145.66 79.7233 145.547 79.5412 145.348 79.5641V79.4575Z" fill="#EEBC31"/>
<path d="M154.613 79.5116C154.471 79.5938 154.319 79.6561 154.16 79.6967C154.156 79.5116 154.518 79.422 154.613 79.5116Z" fill="#EEBC31"/>
<path d="M146.148 79.7246C146.35 79.7228 146.546 79.7879 146.707 79.9098C146.533 79.9158 146.183 79.874 146.148 79.7246Z" fill="#EEBC31"/>
<path d="M153.813 79.7515C153.642 79.872 153.435 79.928 153.227 79.9098C153.308 79.8444 153.402 79.7966 153.503 79.7693C153.604 79.7421 153.71 79.736 153.813 79.7515Z" fill="#EEBC31"/>
<path d="M152.352 80.0965C152.159 80.1402 151.959 80.1402 151.766 80.0965C151.811 79.9163 152.292 79.9323 152.352 80.0965Z" fill="#EEBC31"/>
<path d="M148.252 80.0141C148.201 80.2132 147.826 80.0848 147.613 80.1196C147.63 79.8847 148.074 80.0141 148.252 80.0141Z" fill="#EEBC31"/>
<path d="M149.048 80.0709C148.873 80.1498 148.678 80.177 148.488 80.1496C148.542 80.0062 148.894 80.0231 149.048 80.0709Z" fill="#EEBC31"/>
<path d="M151.446 80.1775C151.258 80.1602 151.072 80.1333 150.887 80.0969C150.987 80.0023 151.446 79.9944 151.446 80.1775Z" fill="#EEBC31"/>
<path d="M155.125 81.1888C155.246 81.1888 155.181 80.9947 155.311 81.0017C155.292 81.0833 155.338 81.1012 155.337 81.161C155.267 81.2073 155.187 81.2362 155.104 81.2454C155.02 81.2546 154.936 81.2437 154.858 81.2137C154.649 81.3252 154.389 81.7115 154.112 81.4268C153.921 81.4586 153.949 81.7065 153.792 81.7732C153.579 81.6059 153.394 81.6876 153.074 81.7194C152.974 81.828 152.974 82.0231 152.781 82.039C152.793 81.9175 152.938 81.9305 152.94 81.8001C152.91 81.7135 152.759 81.7503 152.7 81.6926C152.651 81.4745 152.821 81.4755 152.888 81.373C153.009 81.4029 153.02 81.5422 153.047 81.6717C153.13 81.67 153.211 81.6514 153.287 81.6169C153.31 81.485 153.375 81.3639 153.472 81.2714C153.472 81.1241 153.372 80.923 153.391 80.8454C153.544 80.8802 153.47 81.144 153.551 81.2436C153.756 81.2247 153.877 81.2914 153.923 81.4288C154.13 81.3501 154.192 81.1092 154.455 81.1102C154.571 81.1102 154.634 81.2097 154.748 81.1898C154.78 80.8364 154.687 80.1107 154.242 80.3934C154.262 80.254 154.459 80.2939 154.615 80.2869C154.892 80.4751 154.628 81.2137 155.125 81.1888ZM154.193 81.4019C154.315 81.5124 154.624 81.4526 154.591 81.2426C154.512 81.1072 154.136 81.1629 154.189 81.4009L154.193 81.4019ZM153.661 81.5343C153.724 81.5229 153.786 81.5052 153.846 81.4815C153.842 81.1769 153.416 81.3282 153.656 81.5343H153.661ZM153.421 81.6149C153.488 81.6149 153.504 81.5731 153.554 81.5612C153.554 81.4745 153.565 81.374 153.473 81.376C153.42 81.4218 153.344 81.5283 153.416 81.6139L153.421 81.6149ZM152.781 81.6687C152.864 81.7055 152.901 81.6806 152.968 81.6418C152.968 81.5791 152.922 81.5631 152.941 81.4825C152.826 81.4865 152.757 81.5303 152.777 81.6687H152.781ZM153.686 81.6687C153.704 81.6836 153.726 81.6926 153.75 81.6945C153.773 81.6964 153.797 81.6911 153.817 81.6793C153.838 81.6675 153.854 81.6498 153.864 81.6285C153.874 81.6072 153.877 81.5834 153.873 81.5602C153.786 81.5771 153.681 81.5671 153.682 81.6687H153.686Z" fill="#EEBC31"/>
<path d="M145.454 80.4175V80.5499C145.416 80.5917 145.317 80.5738 145.241 80.5768C145.218 80.4822 145.241 80.5101 145.215 80.4175C145.249 80.39 145.291 80.375 145.334 80.375C145.378 80.375 145.42 80.39 145.454 80.4175Z" fill="#EEBC31"/>
<path d="M145.404 80.7309C145.404 80.7787 145.371 80.7877 145.377 80.8375C145.269 80.8375 145.169 80.8375 145.164 80.7309C145.201 80.7111 145.242 80.7007 145.284 80.7007C145.326 80.7007 145.367 80.7111 145.404 80.7309Z" fill="#EEBC31"/>
<path d="M150.994 80.9487H151.101C151.121 80.9811 151.131 81.018 151.131 81.0557C151.131 81.0934 151.121 81.1304 151.101 81.1627H150.994C150.975 81.1304 150.965 81.0934 150.965 81.0557C150.965 81.018 150.975 80.9811 150.994 80.9487Z" fill="#EEBC31"/>
<path d="M148.065 81.0015C148.147 81.3479 148.206 82.0965 147.905 82.1463C147.605 82.1961 147.691 81.7411 147.4 81.7202C147.219 81.8129 147.009 81.8322 146.814 81.774C146.682 81.7829 146.703 81.9462 146.574 81.9612C146.745 81.784 146.674 81.5629 146.655 81.3479C146.797 81.3648 146.818 81.5042 146.814 81.6685C146.891 81.8287 147.212 81.7212 147.32 81.6685C147.262 81.556 147.19 81.4594 147.133 81.3479C147.296 81.3051 147.296 81.1538 147.452 81.1628C147.512 81.1732 147.567 81.2029 147.608 81.2473C147.649 81.2918 147.675 81.3486 147.681 81.409C147.687 81.4694 147.673 81.5301 147.641 81.5818C147.609 81.6335 147.562 81.6734 147.505 81.6953C147.679 81.76 147.704 81.9791 147.851 82.0677C148.204 81.991 147.947 81.3101 148.065 81.0015ZM147.268 81.4276C147.268 81.5271 147.356 81.5868 147.453 81.6416C147.901 81.4395 147.287 81.0005 147.267 81.4276H147.268Z" fill="#EEBC31"/>
<path d="M148.409 81.0015C148.496 81.1846 148.379 81.6048 148.355 81.8536C148.317 81.5687 148.336 81.2793 148.409 81.0015Z" fill="#EEBC31"/>
<path d="M151.366 81.0015C151.545 81.1787 151.335 81.7431 151.552 81.8795C151.734 81.8258 151.856 81.8497 151.898 81.6944C151.935 81.556 151.744 81.4733 151.845 81.3748C152.083 81.3867 151.926 81.7202 151.898 81.8546C151.64 81.9309 151.368 81.9489 151.102 81.9074C151.116 81.771 151.259 81.763 151.368 81.7202C151.467 81.4903 151.309 81.1876 151.366 81.0015Z" fill="#EEBC31"/>
<path d="M151.207 81.3212C151.224 81.4765 150.885 81.3879 150.994 81.2943C151.033 81.2585 151.205 81.2396 151.207 81.3212Z" fill="#EEBC31"/>
<path d="M152.19 82.2003C152.237 82.0768 152.3 81.9603 152.378 81.8539C152.303 81.7055 152.01 81.5662 152.217 81.374C152.626 81.4347 152.432 82.1027 152.19 82.2003ZM152.216 81.5034C152.229 81.603 152.272 81.6806 152.377 81.6906C152.441 81.6159 152.321 81.4188 152.216 81.5074V81.5034Z" fill="#EEBC31"/>
<path d="M155.145 81.4804C155.145 81.6357 154.955 81.58 154.879 81.5332C154.921 81.3849 155.056 81.4297 155.145 81.4804Z" fill="#EEBC31"/>
<path d="M149.155 81.4546C149.303 81.5505 149.471 81.6121 149.645 81.635C149.82 81.6579 149.998 81.6415 150.166 81.587C150.243 81.6617 150.235 81.82 150.299 81.9066C150.347 81.8784 150.404 81.8688 150.458 81.8797C150.403 81.5631 150.844 81.4815 150.831 81.8269C150.749 81.9783 150.511 81.9683 150.271 81.9603C150.163 82.02 150.163 82.1883 150.058 82.252C149.999 82.2395 149.945 82.2104 149.903 82.168C149.86 82.1256 149.831 82.0718 149.818 82.0131C149.537 81.9665 149.251 81.9488 148.966 81.9603C148.859 82.0867 148.756 82.3476 148.594 82.3327C148.671 82.1963 148.823 82.1335 148.861 81.9603C148.811 81.8608 148.626 81.7791 148.727 81.6139C148.983 81.5721 148.858 81.9125 149.073 81.9066C149.301 81.819 149.126 81.6029 149.155 81.4546ZM149.235 81.9066C149.379 81.9066 149.623 81.9066 149.82 81.9334C149.904 82.0011 149.914 82.1415 150.033 82.1734C150.121 82.0579 150.272 81.8389 150.141 81.6676C149.847 81.9116 149.207 81.3531 149.235 81.9066ZM150.565 81.8797C150.703 81.9036 150.754 81.8379 150.752 81.7204C150.651 81.585 150.47 81.7413 150.565 81.8797Z" fill="#EEBC31"/>
<path d="M145.271 81.5869C145.355 81.564 145.353 81.6287 145.403 81.6416C145.4 81.7065 145.382 81.7698 145.35 81.8268C145.197 81.8049 145.197 81.6705 145.271 81.5869Z" fill="#EEBC31"/>
<path d="M145.72 81.6946C145.833 81.8788 145.562 81.9784 145.48 81.827C145.49 81.7136 145.578 81.6727 145.72 81.6946Z" fill="#EEBC31"/>
<path d="M146.12 81.9078C146.094 81.9078 146.099 81.9406 146.093 81.9615H145.906C145.781 81.7425 146.13 81.6609 146.12 81.9078Z" fill="#EEBC31"/>
<path d="M151.333 82.0669C151.475 82.0669 151.459 82.2979 151.36 82.3337C151.256 82.3198 151.264 82.1137 151.333 82.0669Z" fill="#EEBC31"/>
<path d="M151.712 82.3335C151.635 82.3036 151.555 82.2767 151.527 82.2011C151.608 81.9462 151.934 82.1732 151.712 82.3335Z" fill="#EEBC31"/>
<path d="M145.59 80.4175H145.671C145.679 80.7848 145.123 81.413 145.751 81.4558C145.851 81.3901 145.797 81.1651 145.937 81.1362C145.952 81.2766 145.883 81.3353 145.857 81.4289C145.978 81.7704 146.592 81.5763 146.337 81.19C146.635 81.19 146.4 81.5135 146.363 81.6429C146.268 81.6715 146.167 81.6767 146.07 81.658C145.973 81.6393 145.882 81.5972 145.804 81.5354C145.505 81.5115 145.247 81.4528 145.219 81.1631C145.483 81.0546 145.537 80.74 145.59 80.4175Z" fill="#EEBC31"/>
</g>
</g>
</g>
<path d="M113.716 157V143.909H121.923V145.609H115.691V149.598H121.495V151.292H115.691V155.3H122V157H113.716ZM128.524 160.886C127.744 160.886 127.073 160.784 126.511 160.58C125.953 160.375 125.497 160.104 125.143 159.768C124.789 159.431 124.525 159.063 124.35 158.662L125.993 157.984C126.108 158.172 126.262 158.37 126.453 158.579C126.649 158.792 126.914 158.973 127.246 159.122C127.583 159.271 128.015 159.346 128.544 159.346C129.268 159.346 129.867 159.169 130.34 158.815C130.813 158.466 131.049 157.908 131.049 157.141V155.21H130.928C130.813 155.419 130.646 155.651 130.429 155.907C130.216 156.163 129.922 156.384 129.547 156.572C129.172 156.759 128.684 156.853 128.083 156.853C127.308 156.853 126.609 156.672 125.987 156.31C125.369 155.943 124.879 155.404 124.517 154.692C124.159 153.977 123.98 153.097 123.98 152.053C123.98 151.009 124.156 150.114 124.51 149.368C124.868 148.622 125.358 148.051 125.98 147.655C126.602 147.254 127.308 147.054 128.096 147.054C128.705 147.054 129.198 147.156 129.573 147.361C129.948 147.561 130.24 147.795 130.448 148.064C130.661 148.332 130.825 148.569 130.941 148.773H131.081V147.182H132.954V157.217C132.954 158.061 132.758 158.754 132.366 159.295C131.974 159.836 131.443 160.237 130.774 160.496C130.11 160.756 129.36 160.886 128.524 160.886ZM128.505 155.268C129.055 155.268 129.519 155.14 129.899 154.884C130.282 154.624 130.572 154.254 130.768 153.772C130.968 153.286 131.068 152.705 131.068 152.027C131.068 151.366 130.97 150.785 130.774 150.282C130.578 149.779 130.291 149.387 129.911 149.106C129.532 148.82 129.063 148.678 128.505 148.678C127.93 148.678 127.45 148.827 127.067 149.125C126.683 149.419 126.394 149.82 126.198 150.327C126.006 150.834 125.91 151.401 125.91 152.027C125.91 152.67 126.008 153.235 126.204 153.721C126.4 154.207 126.69 154.586 127.073 154.859C127.461 155.131 127.938 155.268 128.505 155.268ZM136.725 160.682C136.44 160.682 136.18 160.658 135.945 160.612C135.711 160.569 135.536 160.522 135.421 160.471L135.882 158.905C136.231 158.999 136.542 159.039 136.815 159.026C137.088 159.013 137.328 158.911 137.537 158.719C137.75 158.528 137.938 158.214 138.1 157.78L138.336 157.128L134.744 147.182H136.789L139.276 154.801H139.378L141.865 147.182H143.916L139.87 158.31C139.683 158.822 139.444 159.254 139.154 159.608C138.865 159.966 138.519 160.234 138.119 160.413C137.718 160.592 137.254 160.682 136.725 160.682ZM145.713 160.682V147.182H147.579V148.773H147.739C147.85 148.569 148.009 148.332 148.218 148.064C148.427 147.795 148.717 147.561 149.088 147.361C149.458 147.156 149.948 147.054 150.558 147.054C151.35 147.054 152.058 147.254 152.68 147.655C153.302 148.055 153.79 148.633 154.144 149.387C154.502 150.141 154.681 151.049 154.681 152.11C154.681 153.171 154.504 154.081 154.15 154.839C153.796 155.594 153.311 156.175 152.693 156.585C152.075 156.989 151.369 157.192 150.577 157.192C149.98 157.192 149.492 157.092 149.113 156.891C148.738 156.691 148.444 156.457 148.231 156.188C148.018 155.92 147.854 155.681 147.739 155.472H147.624V160.682H145.713ZM147.585 152.091C147.585 152.781 147.686 153.386 147.886 153.906C148.086 154.426 148.376 154.833 148.755 155.127C149.134 155.417 149.599 155.562 150.149 155.562C150.72 155.562 151.197 155.411 151.58 155.108C151.964 154.801 152.254 154.386 152.45 153.862C152.65 153.337 152.75 152.747 152.75 152.091C152.75 151.443 152.652 150.862 152.456 150.346C152.264 149.83 151.975 149.423 151.587 149.125C151.203 148.827 150.724 148.678 150.149 148.678C149.595 148.678 149.126 148.82 148.742 149.106C148.363 149.391 148.075 149.79 147.879 150.301C147.683 150.812 147.585 151.409 147.585 152.091ZM161.405 147.182V148.716H156.042V147.182H161.405ZM157.48 144.83H159.392V154.117C159.392 154.488 159.447 154.767 159.558 154.955C159.669 155.138 159.811 155.263 159.986 155.332C160.165 155.396 160.359 155.428 160.568 155.428C160.721 155.428 160.855 155.417 160.97 155.396C161.085 155.374 161.175 155.357 161.239 155.344L161.584 156.923C161.473 156.966 161.316 157.009 161.111 157.051C160.906 157.098 160.651 157.124 160.344 157.128C159.841 157.136 159.372 157.047 158.938 156.859C158.503 156.672 158.151 156.382 157.883 155.99C157.615 155.598 157.48 155.106 157.48 154.513V144.83ZM163.519 157V147.182H165.43V157H163.519ZM164.484 145.667C164.152 145.667 163.866 145.556 163.628 145.335C163.393 145.109 163.276 144.84 163.276 144.529C163.276 144.214 163.393 143.945 163.628 143.724C163.866 143.498 164.152 143.385 164.484 143.385C164.817 143.385 165.1 143.498 165.335 143.724C165.573 143.945 165.692 144.214 165.692 144.529C165.692 144.84 165.573 145.109 165.335 145.335C165.1 145.556 164.817 145.667 164.484 145.667ZM170.859 157.217C170.237 157.217 169.674 157.102 169.171 156.872C168.669 156.638 168.27 156.299 167.976 155.856C167.686 155.413 167.541 154.869 167.541 154.226C167.541 153.672 167.648 153.216 167.861 152.858C168.074 152.5 168.362 152.217 168.724 152.008C169.086 151.799 169.491 151.641 169.938 151.535C170.386 151.428 170.842 151.347 171.306 151.292C171.894 151.224 172.372 151.168 172.738 151.126C173.105 151.079 173.371 151.004 173.537 150.902C173.703 150.8 173.786 150.634 173.786 150.403V150.359C173.786 149.8 173.629 149.368 173.313 149.061C173.002 148.754 172.538 148.601 171.92 148.601C171.276 148.601 170.769 148.744 170.399 149.029C170.032 149.31 169.779 149.624 169.638 149.969L167.842 149.56C168.055 148.963 168.366 148.482 168.775 148.115C169.188 147.744 169.664 147.476 170.2 147.31C170.737 147.139 171.302 147.054 171.894 147.054C172.286 147.054 172.702 147.101 173.141 147.195C173.584 147.284 173.997 147.45 174.381 147.693C174.769 147.936 175.086 148.283 175.333 148.735C175.58 149.183 175.704 149.764 175.704 150.48V157H173.838V155.658H173.761C173.637 155.905 173.452 156.148 173.205 156.386C172.958 156.625 172.64 156.823 172.252 156.981C171.865 157.138 171.4 157.217 170.859 157.217ZM171.274 155.683C171.803 155.683 172.254 155.579 172.629 155.37C173.009 155.161 173.296 154.888 173.492 154.552C173.693 154.211 173.793 153.847 173.793 153.459V152.193C173.725 152.261 173.593 152.325 173.396 152.385C173.205 152.44 172.985 152.489 172.738 152.532C172.491 152.57 172.25 152.607 172.016 152.641C171.781 152.67 171.585 152.696 171.428 152.717C171.057 152.764 170.718 152.843 170.411 152.954C170.109 153.065 169.866 153.224 169.683 153.433C169.504 153.638 169.414 153.911 169.414 154.251C169.414 154.724 169.589 155.082 169.938 155.325C170.288 155.564 170.733 155.683 171.274 155.683ZM180.161 151.17V157H178.25V147.182H180.084V148.78H180.206C180.431 148.26 180.785 147.842 181.267 147.527C181.752 147.212 182.364 147.054 183.101 147.054C183.77 147.054 184.356 147.195 184.859 147.476C185.362 147.753 185.752 148.166 186.029 148.716C186.306 149.266 186.444 149.945 186.444 150.755V157H184.533V150.985C184.533 150.273 184.348 149.717 183.977 149.317C183.606 148.912 183.097 148.71 182.449 148.71C182.006 148.71 181.612 148.805 181.267 148.997C180.926 149.189 180.655 149.47 180.455 149.841C180.259 150.207 180.161 150.651 180.161 151.17Z" fill="#FA6B6B"/>
<defs>
<clipPath id="clip0_5_4197">
<rect width="73" height="73" fill="white" transform="translate(113.52 35)"/>
</clipPath>
<clipPath id="clip1_5_4197">
<rect width="73" height="73" fill="white" transform="translate(113.52 35)"/>
</clipPath>
<clipPath id="clip2_5_4197">
<rect width="73" height="73" fill="white" transform="translate(113.52 35)"/>
</clipPath>
</defs>
</svg>

    </div>
  )
}

export default EgyptImage