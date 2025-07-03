// import PropTypes from 'prop-types'
// import { useEffect } from 'react'
// import { createPortal } from 'react-dom'
// import * as S from './TrailerModal.styles'
// import { getYouTubeTrailerUrl } from '@services/youtube';

// // import { getYouTubeTrailerUrl } from '@services/youtube'

// const TrailerModal = ({ videoKey, onClose }) => {
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === 'Escape') {
//         onClose()
//       }
//     }

//     document.addEventListener('keydown', handleKeyDown)
//     document.body.style.overflow = 'hidden'

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown)
//       document.body.style.overflow = 'auto'
//     }
//   }, [onClose])

//   if (!videoKey) return null

//   const trailerUrl = getYouTubeTrailerUrl(videoKey)

//   return createPortal(
//     <S.ModalOverlay onClick={onClose}>
//       <S.ModalContent onClick={(e) => e.stopPropagation()}>
//         <S.CloseButton onClick={onClose}>×</S.CloseButton>
//         <S.IframeContainer>
//           <iframe
//             src={trailerUrl}
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           />
//         </S.IframeContainer>
//       </S.ModalContent>
//     </S.ModalOverlay>,
//     document.body
//   )
// }

// TrailerModal.propTypes = {
//   videoKey: PropTypes.string,
//   onClose: PropTypes.func.isRequired,
// }

// export default TrailerModal





import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import * as S from './TrailerModal.styles';

// ✅ Helper function for building YouTube embed URL directly from TMDB video key
const getYouTubeTrailerUrl = (key) => `https://www.youtube.com/embed/${key}`;

const TrailerModal = ({ videoKey, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!videoKey) return null;

  const trailerUrl = getYouTubeTrailerUrl(videoKey); // ✅ No async, works instantly

  return createPortal(
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={onClose}>×</S.CloseButton>
        <S.IframeContainer>
          <iframe
            src={trailerUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </S.IframeContainer>
      </S.ModalContent>
    </S.ModalOverlay>,
    document.body
  );
};

TrailerModal.propTypes = {
  videoKey: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default TrailerModal;
