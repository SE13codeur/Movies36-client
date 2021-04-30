import Link from '@material-ui/core/Link'

const NotFoundPage = () => {
  return (
    <div
      css={{
        height: '100%',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        Sorry... nothing here. <Link to="/welcomeMovies">Go HOME</Link>
      </div>
    </div>
  )
}

export default NotFoundPage