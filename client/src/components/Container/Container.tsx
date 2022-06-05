import './Container.scss';

const Container = ({ children }: any) => {
  return (
    <div className="container">
      {children}
    </div>
  )
}

export default Container