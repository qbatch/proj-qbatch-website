import React from 'react';
import NextDevOpsProjectWrapper from './style';
import Container from '../../UiComponent/Container';

const NextDevOpsProject = () => {
  const boxesData = [
    { icon: '/why-choose-qbatch-as-your-next-product-development-company_technical-excellence.svg', text: 'DevOps DNA' },
    { icon: '/why-choose-qbatch-as-your-next-product-development-company_efficient-talent-pool.svg', text: 'DevOps DNA' },
    { icon: '/why-choose-qbatch-as-your-next-product-development-company_data-ownership-and-control.svg', text: 'DevOps DNA' },
    { icon: '/why-choose-qbatch-as-your-next-product-development-company_data-ownership-and-control.svg', text: 'DevOps DNA' },
    { icon: '/why-choose-qbatch-as-your-next-product-development-company_immaculate-software-engineering.svg', text: 'DevOps DNA' },
    { icon: '/why-choose-qbatch-as-your-next-product-development-company_strongly-agile.svg', text: 'DevOps DNA' },
    { icon: '/why-choose-qbatch-as-your-next-product-development-company_optimal-research-and-development.svg', text: 'DevOps DNA' },
    { icon: '/why-choose-qbatch-as-your-next-product-development-company_optimal-research-and-development.svg', text: 'DevOps DNA' },
    { icon: '/why-choose-qbatch-as-your-next-product-development-company_flexible-business-models.svg', text: 'DevOps DNA' },
    { icon: '/why-choose-qbatch-as-your-next-product-development-company_great-value-for-money.svg', text: 'DevOps DNA' }
  ];

  return (
    <NextDevOpsProjectWrapper>
      <Container>
        <h2 className='heading text-center'>Why Choose Qbatch For Your Next DevOps Project?</h2>
        <div className='boxes'>
          {boxesData.map((box, index) => (
            <div className='box' key={index}>
              <img src={box.icon} alt={box.text} />
              <span>{box.text}</span>
            </div>
          ))}
        </div>
      </Container>
    </NextDevOpsProjectWrapper>
  );
};

export default NextDevOpsProject;
