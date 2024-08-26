import Container from 'components/shared/container';

const Hero = () => (
  <section className="safe-paddings bg-black-pure pt-40 text-white xl:pt-36 lg:pt-12 md:pt-6">
    <Container className="grid grid-cols-12 gap-x-10 3xl:gap-x-0" size="1344">
      <div className="col-span-10 col-start-2 3xl:col-span-full 3xl:col-start-1">
        <h1 className="t-5xl text-center font-title font-medium leading-tight">
          Become a part of our team :)
        </h1>
      </div>
    </Container>
  </section>
);

export default Hero;
