function Footer() {
    return (
        <footer className='page-footer light-green darken-3'>
            <div className='footer-copyright'>
                <div className='container'>
                    © {new Date().getFullYear()} All Rights Reserved
                    <a className='grey-text text-lighten-4 right' href='#!'>
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
