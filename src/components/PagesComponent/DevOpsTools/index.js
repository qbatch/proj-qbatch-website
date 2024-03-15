import React from 'react';
import DevOpsToolsWrapper from './style';
import Container from '../../UiComponent/Container';
import Button from "../../UiComponent/Button";

const DevOpsTools = () => {
  const tools = [
    { name: 'AWS', icon: '/devops-tool-aws.svg' },
    { name: 'Jenkins', icon: '/devops-tool-jenkins.svg' },
    { name: 'Docker', icon: '/devops-tool-docker.svg' },
    { name: 'Ansible', icon: '/devops-tools-ansible.svg' },
    { name: 'Puppet', icon: '/devops-tools-puppet.svg' },
    { name: 'Chef', icon: '/devops-tools-chef.svg' },
    { name: 'GIT', icon: '/devops-tools-git.svg' },
    { name: 'Kubernetes', icon: '/devops-tool-kubernetes.svg' },
    { name: 'Negios', icon: '/devops-tool-negios.svg' },
    { name: 'Terraform', icon: '/devops-tool-teraform.svg' }
  ];

  return (
    <DevOpsToolsWrapper>
      <Container>
        <h2 className='heading'>DevOps Tools We Support</h2>
        <div className='dev-ops-tools'>
          {tools.map((tool, index) => (
            <div className='tool-box' key={index}>
              <img src={tool.icon} alt={tool.name} />
              <span className='title'>{tool.name}</span>
            </div>
          ))}
        </div>
        <div className='d-flex justify-content-center'>
        <Button text="Get Free Technical Consultation" />
        </div>
      </Container>
    </DevOpsToolsWrapper>
  );
};

export default DevOpsTools;
