const Logo = () => (
    <svg
        width='64'
        height='64'
        viewBox='0 0 64 64'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        {/* <!-- Calendar body --> */}
        <rect x='4' y='8' width='56' height='48' rx='10' fill='#FF9500' />

        {/* <!-- Top rings --> */}
        <rect x='16' y='2' width='6' height='12' rx='2' fill='white' />
        <rect x='42' y='2' width='6' height='12' rx='2' fill='white' />

        {/* <!-- Checkmark --> */}
        <path
            d='M22 34L30 42L46 26'
            stroke='white'
            stroke-width='4'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
    </svg>
);

export default Logo;
