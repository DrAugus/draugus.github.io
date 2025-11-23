<template>
  <div class="history-container">
    <div class="timeline">
      <div class="timeline-line"></div>

      <div v-for="(dynasty, key, index) in history" :key="key" class="dynasty-card"
        :class="{ 'left': index % 2 === 0, 'right': index % 2 === 1 }">
        <div class="dynasty-marker">
          <div class="marker-dot"></div>
          <div class="marker-line"></div>
        </div>

        <div class="dynasty-content">
          <div class="dynasty-header">
            <h2 class="dynasty-name">{{ dynasty.name }}</h2>
            <div class="dynasty-date-badge">
              <span class="start-date">{{ formatDate(dynasty.start) }}</span>
              <span class="date-separator">→</span>
              <span class="end-date">{{ formatDate(dynasty.end) }}</span>
            </div>
          </div>

          <div class="dynasty-info">
            <div class="info-summary">
              <span class="event-count">{{ dynasty.info.length }} 个重要事件</span>
              <button v-if="dynasty.info.length > 0" class="view-events-btn" @click="openEventModal(key)">
                查看事件
              </button>
            </div>

            <div class="events-preview">
              <div v-for="(event, eventIndex) in dynasty.info.slice(0, 3)" :key="eventIndex" class="event-item">
                <span class="event-bullet"></span>
                <span class="event-text">{{ event }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 事件弹窗 -->
    <div v-if="selectedDynasty" class="modal-overlay" @click="closeEventModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">{{ selectedDynasty.name }} - 重要事件</h3>
          <button class="modal-close" @click="closeEventModal">×</button>
        </div>
        <div class="modal-date">
          {{ formatDate(selectedDynasty.start) }} → {{ formatDate(selectedDynasty.end) }}
        </div>
        <div class="modal-events">
          <div v-for="(event, index) in selectedDynasty.info" :key="index" class="modal-event-item">
            <span class="event-number">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="event-details">{{ event }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import data from '../../data/history_china.json'

const history = data;
const selectedDynasty = ref<any>(null);

const formatDate = (date: string | number) => {
  if (date === 'now') return '至今';
  if (typeof date === 'number') {
    return date > 0 ? `${date} 年` : `${Math.abs(date)} 年 BC`;
  }
  return date.includes('BC') ? date : `${date} 年`;
};

const openEventModal = (key: string) => {
  selectedDynasty.value = {
    ...history[key],
    key: key
  };
};

const closeEventModal = () => {
  selectedDynasty.value = null;
};
</script>

<style scoped>
.history-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #e2e8f0, #cbd5e1, #e2e8f0);
  transform: translateX(-50%);
}

.dynasty-card {
  position: relative;
  margin-bottom: 3rem;
  width: 45%;
}

.dynasty-card.left {
  left: 0;
}

.dynasty-card.right {
  left: 55%;
}

.dynasty-marker {
  position: absolute;
  top: 1.5rem;
  width: 20px;
  height: 20px;
}

.dynasty-card.left .dynasty-marker {
  right: -30px;
}

.dynasty-card.right .dynasty-marker {
  left: -30px;
}

.marker-dot {
  width: 16px;
  height: 16px;
  background: #3b82f6;
  border: 3px solid white;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
  z-index: 2;
}

.marker-line {
  position: absolute;
  top: 50%;
  width: 20px;
  height: 2px;
  background: #3b82f6;
}

.dynasty-card.left .marker-line {
  right: -20px;
}

.dynasty-card.right .marker-line {
  left: -20px;
}

.dynasty-content {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.dynasty-content:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.dynasty-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.dynasty-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
  line-height: 1.2;
}

.dynasty-date-badge {
  background: #f1f5f9;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #475569;
  white-space: nowrap;
}

.date-separator {
  margin: 0 0.5rem;
  color: #94a3b8;
}

.dynasty-info {
  space-y: 1rem;
}

.info-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.event-count {
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
}

.view-events-btn {
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.view-events-btn:hover {
  background: #2563eb;
  transform: translateY(-1px);
}

.events-preview {
  space-y: 0.75rem;
}

.event-item {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.event-item:hover {
  background: #f8fafc;
}

.event-bullet {
  width: 6px;
  height: 6px;
  background: #3b82f6;
  border-radius: 50%;
  margin-top: 0.5rem;
  flex-shrink: 0;
}

.event-text {
  font-size: 0.875rem;
  line-height: 1.4;
  color: #475569;
  flex: 1;
}

/* 弹窗样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}

.modal-content {
  background: white;
  border-radius: 12px;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.modal-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
}

.modal-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #64748b;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: #f1f5f9;
  color: #475569;
}

.modal-date {
  padding: 1rem 1.5rem;
  background: #f8fafc;
  color: #64748b;
  font-size: 0.875rem;
  font-weight: 500;
}

.modal-events {
  flex: 1;
  overflow-y: auto;
  padding: 1rem 1.5rem;
}

.modal-event-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f1f5f9;
}

.modal-event-item:last-child {
  border-bottom: none;
}

.event-number {
  background: #3b82f6;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  flex-shrink: 0;
}

.event-details {
  font-size: 0.875rem;
  line-height: 1.5;
  color: #475569;
  flex: 1;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .history-container {
    padding: 1rem;
  }

  .timeline-line {
    left: 30px;
  }

  .dynasty-card {
    width: calc(100% - 60px);
    left: 60px !important;
    margin-left: 0;
  }

  .dynasty-card.left .dynasty-marker,
  .dynasty-card.right .dynasty-marker {
    left: -40px;
    right: auto;
  }

  .dynasty-header {
    flex-direction: column;
    gap: 0.5rem;
  }

  .dynasty-date-badge {
    align-self: flex-start;
  }

  .dynasty-name {
    font-size: 1.25rem;
  }

  .info-summary {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .modal-overlay {
    padding: 1rem;
  }

  .modal-content {
    max-height: 90vh;
  }
}

/* 滚动条样式 */
.modal-events::-webkit-scrollbar {
  width: 6px;
}

.modal-events::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 3px;
}

.modal-events::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

.modal-events::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>
