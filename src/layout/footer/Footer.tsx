import styled from "styled-components";
import { SectionTitle } from "../../components/SectionTitle";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={"column"} align={"center"}>
        <Name>Ivan</Name>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon
                iconId="instagram"
                width="21"
                height="21"
                viewBox="0 0 21px 21px"
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                iconId="telegram"
                width="21"
                height="21"
                viewBox="0 0 21px 21px"
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                iconId="vk"
                width="21"
                height="21"
                viewBox="0 0 21px 21px"
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                iconId="linkedIn"
                width="21"
                height="21"
                viewBox="0 0 21px 21px"
              />
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>© 2024 Ivan Ivanov, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #8ea18a;
  min-height: 20vh;
`;

const Name = styled.span``;

const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a``;

const Copyright = styled.small``;
